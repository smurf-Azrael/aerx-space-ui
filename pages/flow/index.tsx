import React from 'react';
import Chat from '../../components/chat';

const Flow: React.FC = () => {
    return (
        <div className='w-full h-screen bg-black p-6'>
           <div className='flex justify-between'>
                <div className='w-[39%] h-[94vh]'>
                    <Chat />
                </div>

                <div className='bg-blue-500 w-[39%] h-[94vh]'>

                </div>

                <div className='w-[18%] bg-green-500 h-[94vh]'>

                </div>
            </div>
        </div>
    )
}

export default Flow;