import React from 'react';
import Chat from '../../components/chat';
import FlowFeeds from '../../components/flow';

const Flow: React.FC = () => {
    return (
        <div className='w-full h-screen bg-black p-6'>
           <div className='flex justify-between'>
                <div className='w-[39%] h-[94vh]'>
                    <Chat />
                </div>

                <div className=' w-[39%] h-[94vh] overflow-y-scroll '>
                    <FlowFeeds />
                </div>

                <div className='w-[18%] bg-green-500 h-[94vh]'>

                </div>
            </div>
        </div>
    )
}

export default Flow;