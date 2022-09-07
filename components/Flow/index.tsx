import React, { useState } from 'react'
import AddPost from './AddPost';
import FlowHeader from './Header';
import ListFeeds from './ListFeed';

const FlowFeeds: React.FC = () => {
    const [addPost, setAddPost] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState<string>('');
    return (
        <div className='w-full h-[max-content] bg-black-dark rounded-[10px]'>
            {!addPost &&
                <>
                    <div className='flex  gap-2 py-2 px-4'>
                        <FlowHeader
                            onAddPost={() => setAddPost(true)}
                            onSearch={(searchKey: string) => setSearchKey(searchKey)}
                        />
                    </div>
                    <div className='px-4 py-2'>
                        <ListFeeds searchKey={searchKey} />
                    </div>
                </>
            }
            {
                addPost &&
                <AddPost onClose={() => setAddPost(false)} />
            }
        </div>
    )
}

export default FlowFeeds;