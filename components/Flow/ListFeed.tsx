import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast'
import { tempoFeed, videoFeed } from '../../helpers/data/feeds';
import { initNearConnection } from '../../lib/auth';
import { nearStore } from '../../store/near';
import { Feed } from '../../types/Post';
import VideoControl from '../VideoControl';
import { generateRandomColor } from '../../helpers/utils/generateRadomColor';
import { useDispatch, useSelector } from '../../store/store';
import { useGetPosts } from '../../hooks/useGetPosts';
import { selectPosts } from '../../store/slices/postsSlice';
import ChargePost from '../ChargePost';
import useLongPress from '../../hooks/useLongPress';
import { selectChargePostEvent } from '../../store/slices/chargePostEventsSlice';

// coverImage, postOwner, nftId, title, description
interface IProps {
    feed: Feed,
    setShowCharge: (show:boolean) => void,
    handleOnClick: (e:any) => void,
    handleOnMouseDown: (e:any) => void,
    handleOnMouseUp: (e:any) => void,
    handleOnTouchStart: (e:any) => void,
    handleOnTouchEnd: (e:any) => void,
}
const TextPost: React.FC<IProps> = ({ 
    feed, 
    setShowCharge,
    handleOnClick,
    handleOnMouseDown,
    handleOnMouseUp,
    handleOnTouchStart,
    handleOnTouchEnd
 }) => {
    const {metadata, owner_id, owner_profile, profile} = feed;
    const bgImage = metadata?.media;
    const randomColor = generateRandomColor();

    const { action, handlers } = useLongPress();
    const { click, longPress } = useSelector(selectChargePostEvent)
    const dispatch = useDispatch();


    return (
        <div className='w-full h-[40vh] flex flex-col justify-between rounded-[20px] px-4 pt-4 pb-2' style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: `${randomColor}`
        }}>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Image src={profile?.metadata?.media as string ||
                        "/assets/images/avatar-1.svg"}
                        className='w-8 h-8 rounded-full'
                        alt={`${owner_id}'s avatar`} width={40} height={40} />
                    <label className='text-sm text-white font-bolder'>{profile?.metadata?.extra || owner_id}</label>
                </div>

                <div className='flex gap-1 bg-[#ffffff31] p-2 rounded-[20px]'>
                    <Image src="/assets/icons/nft-icon.svg" alt='NFT' width={15} height={15} />
                    <label className='text-[11px] text-white'>ee34ad4</label>
                </div>
            </div>

            <div>
                <h1 className='text-white font-bold text-xl' style={{ fontWeight: 'bold' }}>{metadata.title}</h1>
                <p className='text-sm text-white mt-2'>{metadata?.description} </p>

                <div className='flex justify-between mt-2 items-center'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image src="/assets/icons/comment-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/save-post-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                    </div>

                    <div>
                        <Image src="/assets/icons/send-message-icon.svg" 
                        alt="comment" width={25} height={25}
                        className="cursor-pointer"
                        onClick={handleOnClick}
                        onMouseDown={handleOnMouseDown}
                        onMouseUp={handleOnMouseUp}
                        onTouchStart={handleOnTouchStart}
                        onTouchEnd={handleOnTouchEnd}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const VideoPost: React.FC<Feed> = ({ metadata, owner_id }) => {
    return (
        <div className='relative w-full  h-[40vh] rounded-[20px]'>

            <div className='w-full  h-full absolute rounded-[20px] '
                style={{
                    backgroundImage: `url(${metadata?.media})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    filter: 'blur(2px)',
                }}>
            </div>
            <div className='p-2 h-full relative flex flex-col justify-between'>
                <div className='flex gap-2'>
                    <Image src="/assets/images/avatar-4.svg" alt={owner_id} width={40} height={40} />
                    <div className='flex flex-col'>
                        <label className='text-white text-sm' style={{ fontWeight: 'bold' }}>{owner_id} hell</label>
                        <label className='text-[13px] text-white'>{owner_id}</label>
                    </div>
                </div>

                <div className='relative w-full'>
                    <div className='relative w-full flex justify-around'>
                        <div className='w-[80%] h-[150px] border-[6px] border-white flex justify-around items-center' style={{
                            backgroundImage: `url('assets/images/cover-image-5.jpeg')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}>
                            <Image src="/assets/icons/play-icon.svg" alt="Play video" width={30} height={30} />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <VideoControl />
                    </div>
                </div>

                <div className='flex justify-between mt-2 items-center'>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="Share" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/add-to-list-icon.svg" alt="Add to List" width={20} height={20} />
                        </div>

                    </div>

                    <div>
                        <Image src="/assets/icons/send-message-icon.svg" alt="Send" width={25} height={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const TempoPost: React.FC<Feed> = ({ owner_id, metadata }) => {

    return (
        <div className='flex flex-col justify-between w-full bg-black h-[40vh] rounded-[20px] p-2' style={{
            backgroundImage: `url('assets/images/cover-image-2.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className='flex justify-between items-center'>
                <div className='bg-[#ffffff48] rounded-full w-[25px]  h-[25px] flex justify-around'>
                    <Image src="/assets/icons/tempo-icon.svg" alt="tempo post" width={15} height={15} />
                </div>
                <div>
                    <Image src="/assets/icons/play-icon.svg" alt="play" width={15} height={15} />
                </div>
            </div>

            <div className='w-full flex justify-around '>
                <div className='flex flex-col'>
                    <Image src='/assets/images/avatar-4.svg' alt={`${owner_id}'s avatar`} width={40} height={40} />
                    <label className='mt-2 text-center text-white ' style={{ fontWeight: 'bold' }}>{owner_id}</label>
                    <label className='text-white text-center text-[12px]' style={{ fontWeight: 'lighter' }}>{metadata.title}</label>
                </div>
            </div>

            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src="/assets/icons/comment-icon.svg" alt="comment" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="/assets/icons/share-icon.svg" alt="comment" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="/assets/icons/save-post-icon.svg" alt="comment" width={20} height={20} />
                    </div>
                    <div>
                        <Image src="/assets/icons/send-message-icon.svg" alt="comment" width={25} height={25} />
                    </div>
                </div>
            </div>

        </div>
    )
}


const ListFeeds: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Array<Feed>>([]);
    const { feeds } = useSelector(selectPosts)
    const nearState: any = nearStore((state) => state);
    const dispatch = useDispatch();
    const [showCharge, setShowCharge] = useState<boolean>(false);




    /* Start of event tracking */
    const [action, setAction] = useState('click');
    const timerRef: any = useRef();
    const isLongPress: any = useRef();
  
    function startPressTimer() {
      isLongPress.current = false;
      timerRef.current = setTimeout(() => {
        isLongPress.current = true;
        setAction('longpress');
      }, 500)
    }
  
    function handleOnClick(e:any) {
      console.log('handleOnClick');
      if (isLongPress.current ) {
        setShowCharge(true);
        console.log('Is long press - not continuing.');
        setAction('click');
        return;
      }
      handleSimpleCharge();
      setAction('click')
    }
  
    function handleOnMouseDown() {
      console.log('handleOnMouseDown');
      startPressTimer();
    }
  
    function handleOnMouseUp() {
      console.log('handleOnMouseUp');
      clearTimeout(timerRef.current);
    }
  
    function handleOnTouchStart() {
      console.log('handleOnTouchStart');
      startPressTimer();
    }
  
    function handleOnTouchEnd() {
      if ( action === 'longpress' ) return;
      console.log('handleOnTouchEnd');
      clearTimeout(timerRef.current);
    }
  
    /*  End of event tracking */




    useEffect(() => {
        if (isLoading) {
            initNearConnection(nearState);
            setIsLoading(false);
        }
    }, [isLoading]);

    useEffect(() => {
        useGetPosts(nearState, dispatch);
    }, [isLoading, nearState.accountId, nearState.pnftContract]);

    useEffect(() => {
        if (feeds.length > 0) {
            manipulateFeeds(feeds);
        }
    }, [feeds])


    /*  handle charging */
    const handleSimpleCharge = async () => {
     toast.success('Post charged successfully')
    }
    /*  end of handle charging*/

    const manipulateFeeds = async (feeds: Array<Feed>) => {
        const newList = [...feeds].reverse();
        let manipulatedFeeds: Feed[] = [];
        let row = 1;
        newList?.map((feed: Feed, index: number) => {
            if (row % 2 !== 0) {
                manipulatedFeeds.push({ ...feed, type: "text" });
                manipulatedFeeds.push(videoFeed)
            }
            else {
                manipulatedFeeds.push(tempoFeed)
                manipulatedFeeds.push({ ...feed, type: "text" });
            }
            row += 1;
            if (index === newList.length - 1) {
                setPosts(manipulatedFeeds);
            }
        })
    }


    return (
        <>
        <Toaster />
        <div className='w-full  flex  flex-wrap gap-2 gap-y-3'>
            {posts.map((post: Feed, index: number) => (
                <div key={index}
                    style={{
                        width: (post.type === 'text') ? '60%' :
                            (post.type === 'video') ? '38%' : '38%'
                    }}>
                    {post.type === 'text' &&
                        <TextPost 
                        feed={post} 
                        setShowCharge={setShowCharge}

                        handleOnClick={handleOnClick}
                        handleOnMouseDown={handleOnMouseDown}
                        handleOnMouseUp={handleOnMouseUp}
                        handleOnTouchStart={handleOnTouchStart}
                        handleOnTouchEnd={handleOnTouchEnd}
                        />
                    }
                    {post.type === 'video' &&
                        <VideoPost {...post} />
                    }
                    {post.type === 'tempo' &&
                        <TempoPost {...post} />
                    }
                </div>
            ))}
        </div>
        {showCharge && <ChargePost onClose={() => setShowCharge(false)} />}
        </>
    )
}
export default ListFeeds;