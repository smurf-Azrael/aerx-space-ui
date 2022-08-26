import Image from 'next/image';
import React, { ReactNode } from 'react'

const Modal: React.FC<{children: ReactNode, onClose: () => void}> = ({children, onClose}) => {
    return (
        <div className='absolute top-0 left-0 h-[100vh] w-screen bg-[#00000095] flex justify-around items-center' style={{zIndex: 30}}>
            <div className='w-[max-content] h-[max-content] p-3 bg-[#191919] rounded-[20px]'>
                <div className='w-full flex'>
                    <div className='ml-auto cursor-pointer' onClick={() => onClose()}>
                        <Image src="/assets/icons/modal-close.svg" alt="close" width={20} height={20} className="cursor-pointer" />
                    </div>
                </div>
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;