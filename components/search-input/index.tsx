import Image from 'next/image';
import React from 'react';

const SearchInput: React.FC = () => {
    return (
        <div className='bg-black-dark py-1 rounded-md flex items-center  gap-1 w-[200px]'>
            <div className='ml-3 mt-2'>
            <Image src={'/assets/icons/search-input-icon.svg'}  width={15} height={15} alt="Search" />
            </div>
            <div>
              <input type="text" placeholder='Search user' className='text-white bg-transparent text-sm focus:outline-none' style={{}} />
            </div>
        </div>
    )
}
export default SearchInput;