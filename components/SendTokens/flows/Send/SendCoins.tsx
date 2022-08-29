import React from 'react'
import Button from '../../../Elements/Button';
import SelectCoin from '../../../SelectCoin';
import StepIndicator from '../../../StepIndicator';

interface IProps{
    setTransactionStatus: (status: 'pending' | 'success' | 'failed') => void;
}
const SendCoins: React.FC<IProps> = ({setTransactionStatus}) => {
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
                            <input type='number' className='text-sm text-right text-white focus:outline-none bg-transparent w-[max-content]' placeholder='0' />
                        </div>
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <label className='text-[11px] text-white opacity-[30%]'>Available to send</label>
                        <label className='text-[11px] text-white opacity-[30%]'>102.4843 AEX</label>
                    </div>
                    <div className='mt-4'>
                        <Button 
                         icon='/assets/icons/right-arrow-icon.svg'
                         label='Send'
                         onClick={() => setTransactionStatus('success')}
                        />
                    </div>

                    <div className='w-full flex my-6 justify-around'>
                    <div className='flex gap-4'>
                        <StepIndicator />
                        <StepIndicator  bg="purple" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendCoins;