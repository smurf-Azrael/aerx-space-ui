import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AddPost from './AddPost';
import FlowHeader from './Header';
import ListFeeds from './ListFeed';

const FlowFeeds: React.FC = () => {
    const router = useRouter();
    const [addPost, setAddPost] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState<string>('');

    const cancelAddPost = () => {
        setAddPost(false);
        router.push('/flow');
    }

    useEffect(() => {
        console.log("Search key: ", searchKey);
    }, [searchKey])

    return (
        <div className='w-full h-[max-content] bg-black-dark rounded-[10px] mt-{25%}'>
            {!addPost &&
                <>
                    <div className='gap-2 flex py-2 px-4'>
                        <FlowHeader
                            onAddPost={() => setAddPost(true)}
                            onSearch={(searchKey: string) => setSearchKey(searchKey)}
                        />
                    </div>
                    <div className='px-4 py-2'>
                        <ListFeeds searchKey={""} />
                    </div>
                </>
            }
            {
                addPost &&
                <AddPost onClose={() => cancelAddPost()} />
            }
        </div>
    )
}

export default FlowFeeds;