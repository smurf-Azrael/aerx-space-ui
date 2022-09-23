import React, { useState } from 'react'
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
    const [coins, setCoins] = useState<string>();

    const handleSend = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const resp = await nearState.tokenContract.ft_transfer(
                {
                    receiver_id: accountId,
                    amount: coins,
                    memo: `From ${nearState.accountId}  to ${accountId} at ${new Date().toLocaleString()}`
                }
            )
            setLoading(false)
            console.log("Sent token ....")
            console.log(resp)
            setTransactionStatus('success')
        }
        catch (e) {
            setLoading(false)
            setTransactionStatus('failed')
            console.log(e)
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
                                onChange={(e) => setCoins(e.target.value)}
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