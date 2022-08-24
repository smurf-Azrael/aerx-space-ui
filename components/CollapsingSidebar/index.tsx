import Image from 'next/image';
import React from 'react'

interface IProps{
        onFlowClicked: () => void,
        onSpaceClicked: () => void,
        onCollectionsClicked?: () => void,
        onChatClicked: () => void,
        onNotificationsClicked?: () => void,
        onSettingsClicked?: () => void
}
const CollapsingSidebar: React.FC<IProps> = ({
        onFlowClicked,
        onSpaceClicked,
        onCollectionsClicked,
        onChatClicked
}) => {
        return (
                <div className='h-[94vh] w-[70px] pr-2'>
                        <div className='rounded-[20px] h-full bg-purple flex flex-col justify-between'>
                        <div className='flex flex-col items-center gap-6 w-ful mt-[40%] h-[70%]'>   
                                <div>
                                     <Image src="/assets/icons/sidebar-logo.svg" alt="logo" width={25} height={25} />   
                                </div>
                                <div
                                className='cursor-pointer'
                                onClick={() => onFlowClicked()}
                                >
                                     <Image src="/assets/icons/sidebar-flow-icon.svg" alt="logo" width={25} height={25} />   
                                </div>
                                <div
                                className='cursor-pointer'
                                onClick={() => onChatClicked()}
                                >
                                     <Image src="/assets/icons/sidebar-valuengr-icon.svg" alt="logo" width={25} height={25} />   
                                </div>
                                <div
                                className='cursor-pointer'
                                onClick={() => onSpaceClicked()}
                                >
                                     <Image src="/assets/icons/sidebar-space-icon.svg" alt="logo" width={25} height={25} />   
                                </div>
                        </div>

                        <div className='flex flex-col items-center gap-6 w-ful'>
                                <div className='relative'>
                                    <div>
                                     <Image src="/assets/icons/notifications-icon.svg" alt="logo" width={25} height={25} />
                                    </div>
                                     <div 
                                     className='
                                     bg-red-500 w-[15px] h-[15px] rounded-full text-[10px] text-white 
                                     flex justify-around items-center absolute -top-2 -right-[5px]'>3</div>   
                                </div>
                                <div>
                                     <Image src="/assets/icons/settings-icon.svg" alt="logo" width={25} height={25} />   
                                </div>  
                        </div>
                        <div>

                        </div>
                        </div>
                </div>
        )
}

export default CollapsingSidebar;