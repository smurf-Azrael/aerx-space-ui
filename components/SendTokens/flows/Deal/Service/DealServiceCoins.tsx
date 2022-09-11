import Image from 'next/image';
import React, { useState } from 'react'
import { nearStore } from '../../../../../store/near';
import { selectActiveReceiver } from '../../../../../store/slices/receiverSlice';
import { useSelector } from '../../../../../store/store';
import Button from '../../../../Elements/Button';
import SelectCoin from '../../../../SelectCoin';
import SelectDealType from '../../../../SelectDealType';
import StepIndicator from '../../../../StepIndicator';

interface IProps {
   setFlow: (flow: number) => void;
}
const DealServiceCoins: React.FC<IProps> = ({ setFlow }) => {
    const { accountId } = useSelector(selectActiveReceiver)
    const nearState = nearStore((state) => state)
    const [loading, setLoading] = useState<boolean>(false);
    const [coins, setCoins] = useState<string>();

    const [level, setLevel] = useState<number>(0)
    const handleSend = async () => {
        setFlow(1)
    }
    return (
        <div className='w-[300px]'>
            <div className='w-full flex justify-around'>
                <label className='text-white'>Send coins</label>
            </div>

            <div className='w-full mt-6'>
                <div className='px-2 w-full'>
                    <div>
                        <SelectDealType />
                    </div>
                    <div className='flex w-full mt-2 justify-between bg-[#131313] p-2 rounded-[10px]'>
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

                {level==0 && 
                <>
                   <div className='mt-4 flex w-full justify-between bg-[#131313] px-4 py-3 rounded-[10px]'>
                   <Image src="/assets/icons/time-icon.svg" width={20} height={20} alt="time" />
                   <label className='text-sm text-white '>15</label>
                   <label className='text-sm text-white opacity-[30%]'>min</label>
                  </div>

                    <div className='mt-4'>
                        <Button
                            icon={!loading ? '/assets/icons/right-arrow-icon.svg' : ''}
                            label={loading ? 'Sending...' : 'Send'}
                            onClick={() => setLevel(1)}
                            />
                    </div>

                    <div className='w-full flex my-6 justify-around'>
                        <div className='flex gap-4'>
                            <StepIndicator />
                            <StepIndicator bg="purple" />
                        </div>
                    </div>
                    </>
                    }
                {(level == 1) && 
                <>
                   <textarea className='w-full mt-4 bg-[#131313] px-4 py-3 rounded-[10px] text-white
                   text-[11px]
                   ' placeholder='Add a note'
                   rows={6}
                   style={{
                    resize: 'none'
                   }}
                   />

                    <div className='mt-4'>
                        <Button
                            icon={!loading ? '/assets/icons/right-arrow-icon.svg' : ''}
                            label={loading ? 'Next level' : 'Next level'}
                            onClick={() => setFlow(2)}
                            />
                    </div>

                    <div className='w-full flex my-6 justify-around'>
                        <div className='flex gap-4'>
                            <StepIndicator />
                            <StepIndicator bg="purple" />
                        </div>
                    </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default DealServiceCoins;