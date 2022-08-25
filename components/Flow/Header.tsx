import Image from 'next/image';
import React from 'react'
import { collapseFlow } from '../../store/slices/modulesSlices';
import { useDispatch } from '../../store/store';

export interface Props {
    backgroundColor?:string,
    placeholder?: string
}

export interface HeaderProps {
    onAddPost: () => void
}
const SearchInput: React.FC<Props> = ({backgroundColor='bg-black-dark', placeholder="Search user" }) => {
    return (
        <div className={`${backgroundColor}  px-[8px] py-1 rounded-md flex items-center  gap-2 w-full`}>
            <div className='mt-1'>
            <Image src={'/assets/icons/search-input-icon.svg'}  width={20} height={20} alt="Search" />
            </div>
            <div>
              <input type="text" placeholder={placeholder} className='text-white bg-transparent text-sm focus:outline-none' style={{}} />
            </div>
        </div>
    )
}

const FlowHeader: React.FC<HeaderProps> = ({onAddPost}) => {
    const dispatch = useDispatch();
    
    const onCollapse = () => {
      dispatch(collapseFlow());
    }

    return (
        <div className='flex justify-between items-center h-10  w-full'>
           <div className='flex items-center mr-1'>
             <Image src="/assets/icons/flow-header-logo.svg" alt='flow' width={30} height={30} />
             <label className='text-white font-semibold text-sm'>My Flow</label>
           </div>

           <div className='flex w-[50%] gap-2 '>
           <div className='w-[75%]'>
             <SearchInput backgroundColor='bg-black-light' placeholder="Search"/>
           </div>
           <div className='bg-black-light p-1  px-2 rounded-[10px] items-center flex  h-[35px]'>
             <Image src='/assets/icons/flash-icon.svg' alt="total posts" width={20} height={20} />
             <label className='text-white text-sm'>31134</label>
           </div>
           </div>

           <div className='flex gap-2'>
           <div className='bg-black-light p-1 rounded-[10px] items-center justify-around flex w-[35px] h-[35px]'>
            <Image src="/assets/icons/switch-icon.svg" alt="Switch accounts" width={20} height={20} />
           </div>
           <div className='bg-purple p-1 rounded-[10px] items-center justify-around flex w-[35px] h-[35px] cursor-pointer hover:opacity-[50%]' 
            onClick={onAddPost}
           >
            <Image src="/assets/icons/white-add-icon.svg" alt="Add Post" width={15} height={15} />
           </div>
           <div className='cursor-pointer' onClick={() => onCollapse()}>
             <Image src="/assets/icons/chat-room-menu-icon.svg" alt="Meu" width={30} height={30} />
           </div>
           </div>
        </div>
    )
}

export default FlowHeader;