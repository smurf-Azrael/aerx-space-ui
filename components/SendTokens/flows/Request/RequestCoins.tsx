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
const RequestCoins: React.FC<IProps> = ({ setTransactionStatus }) => {
    const { accountId } = useSelector(selectActiveReceiver)
    const nearState = nearStore((state) => state)
    const [loading, setLoading] = useState<boolean>(false);
    const [coins, setCoins] = useState<string>();

    const handleSend = async () => {
        setTransactionStatus('success')
    }
    return (
        <div className='w-[300px]'>
            <div className='w-full flex justify-around'>
                <label className='text-white'>Invoice</label>
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
                    
                    <div className='mt-6'>
                        <Button
                            icon={!loading ? '/assets/icons/right-arrow-icon.svg' : ''}
                            label={loading ? 'Requesting...' : 'Request'}
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

export default RequestCoins;