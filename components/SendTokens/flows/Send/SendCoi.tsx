import Big from 'big.js';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { nearStore } from '../../../../store/near';
import { selectActiveReceiver } from '../../../../store/slices/receiverSlice';
import { useSelector } from '../../../../store/store';
import Button from '../../../Elements/Button';
import SelectCoin from '../../../SelectCoin';
import StepIndicator from '../../../StepIndicator';

interface IProps {
    setTransactionStatus: (status: 'pending' | 'success' | 'failed') => void;
}
const SendCoins: React.FC<IProps> = ({ setTransactionStatus }) => {
    const { accountId } = useSelector(selectActiveReceiver)
    const nearState = nearStore((state) => state)
    const [loading, setLoading] = useState<boolean>(false);
    const [amount, setAmount] = useState<string>();


    const handleAmount = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        if (value > 0 && value <= nearState.aexBalance) {
            //change colour
            const inputBigN = new Big(value || 0);
            const formattedInput = inputBigN.mul("10e23").toFixed(0);
            setAmount(`${formattedInput}`);
        }
        //else change colour

    }

    const handleSend = async () => {
        if (loading) return;
        setLoading(true);
        if (accountId != null) {
            try {
                await nearState.tokenContract.ft_transfer(
                    {
                        receiver_id: accountId,
                        amount: amount,
                        memo: `AERX Chat token transfer From ${nearState.accountId}  to ${accountId} at ${new Date().toLocaleString()}`
                    },
                    '300000000000000',
                    '1',
                )
                setLoading(false)
                console.log("Sent token ....")
                setTransactionStatus('success')
            }
            catch (e) {
                setLoading(false)
                // setTransactionStatus('failed')
                console.log(e)
            }
        } else {
            toast.error("receiver id is null click on the receiver on chat and try again")
            console.error("receiver_id is null")
        }
    }
    return (
        <div className='w-[300px]'>
            <div className='w-full flex justify-around'>
                <label className='text-white'>Send coins</label>
            </div>

            <div className='w-full mt-6'>
                <div className='px-2 w-full'>
                    <div className='flex w-full justify-between bg-[#131313] p-2 rounded-[10px]'>
                        <div className='z-10'>
                            <SelectCoin />
                        </div>
                        <div className=''>
                            <input
                                type='number'
                                className='text-sm text-right text-white focus:outline-none bg-transparent w-[max-content]'
                                placeholder='0'
                                onChange={handleAmount}
                            />
                        </div>
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <label className='text-[11px] text-white opacity-[30%]'>Available to send</label>
                        <label className='text-[11px] text-white opacity-[30%]'>{nearState?.aexBalance} AEX</label>
                    </div>
                    <div className='mt-4'>
                        <Button
                            icon={!loading ? '/assets/icons/right-arrow-icon.svg' : ''}
                            label={loading ? 'Sending...' : 'Send'}
                            onClick={() => handleSend()}
                        />
                    </div>

                    <div className='w-full flex my-6 justify-around'>
                        <div className='flex gap-4'>
                            <StepIndicator />
                            <StepIndicator bg="purple" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendCoins;