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
import { error } from 'console';
import { getBalance } from '../../lib/aexContract';
import SharePost from '../SharePost';
import { Feedback } from 'aws-sdk/clients/applicationinsights';
import { getPostChargers, initPostChargersList } from '../../lib/chargeFilebase'
import { selectPostChargers, setPostChargers } from '../../store/slices/postChargesSlice';


// coverImage, postOwner, nftId, title, description
interface IProps {
    feed: Feed,
    handleOnClick: (e: any, feed: Feed) => void,
    onClickCapture: (e: any, feed: Feed) => void,
    handleOnMouseDown: (e: any) => void,
    handleOnMouseUp: (e: any) => void,
    handleOnTouchStart: (e: any) => void,
    handleOnTouchEnd: (e: any) => void,
    initializeShare: (feed: Feed) => void,
}
const TextPost: React.FC<IProps> = ({
    feed,
    handleOnClick,
    handleOnMouseDown,
    handleOnMouseUp,
    handleOnTouchStart,
    handleOnTouchEnd,
    initializeShare,
    onClickCapture
}) => {
    const { metadata, owner_id, owner_profile, profile } = feed;
    const bgImage = metadata?.media;
    const randomColor = generateRandomColor();
    const nearState = nearStore((state) => state);
    const dispatch = useDispatch();
    const { postChargers } = useSelector(selectPostChargers);
    const [userCharged, setUserCharged] = useState<boolean>(false);

    useEffect(() => {
        getChargeStatus();
    }, [feed])

    useEffect(() => {
        findIfUserCharged();
    }, [postChargers])

    const getChargeStatus = async () => {
        const chargers = await getPostChargers(feed.post_id, false, dispatch);
        console.log("post chargers", chargers);
    }

    const findIfUserCharged = async () => {
        if (postChargers && postChargers.length > 0) {
            postChargers.forEach((charger) => {
                if (charger.post_id == feed.post_id) {
                    const findIndex = charger.chargers.findIndex((charger) => charger == nearState.accountId);
                    if (findIndex > -1) {
                        setUserCharged(true);
                    }
                }
            })
        }
    }



    return (
        <div className='w-full h-[40vh] overflow-y-auto flex flex-col justify-between rounded-[20px] px-4 pt-4 pb-2 ' style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: `${randomColor}`
        }}>
            <div className='sticky top-2 flex justify-between items-center' >
                <div className=' flex gap-2 items-center'>
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
                <div className='overflow-y-scroll'>
                    <h1 className='text-white font-bold text-xl' style={{ fontWeight: 'bold' }}>{metadata.title}</h1>
                    <div className='h-[135px] overflow-y-scroll'>
                        <p className='text-sm text-white mt-2'>{metadata?.description} </p>
                    </div>
                </div>
                <div className='flex justify-between mt-2 items-center'>
                    <div className='flex gap-3 items-center'>
                        <div className='hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]'>
                            <Image className='cursor-pointer' src="/assets/icons/comment-icon.svg" alt="comment" width={20} height={20} />
                        </div>
                        <div className='hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]'>
                            <Image src="/assets/icons/share-icon.svg" alt="share" width={20} height={20}
                                className='cursor-pointer '
                                onClick={(e) => initializeShare(feed)}
                            />
                        </div>
                        <div className='hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]'>
                            <Image className='cursor-pointer' src="/assets/icons/save-post-icon.svg" alt="save" width={20} height={20} />
                        </div>
                    </div>

                    {!feed?.metadata?.title.includes('AERX ProfileNFT for') &&
                        <div>
                            {!userCharged &&
                                <div className='cursor-pointer charge-filter-effect w-[30px] h-[30px] rounded-full flex justify-around'>
                                    <Image src="/assets/icons/not-charged-icon.svg"
                                        alt="charge post" width={15} height={15}
                                        className="cursor-pointer"
                                        onClick={(e) => handleOnClick(e, feed)}
                                        onClickCapture={(e) => onClickCapture(e, feed)}
                                        onMouseDown={handleOnMouseDown}
                                        onMouseUp={handleOnMouseUp}
                                        onTouchStart={handleOnTouchStart}
                                        onTouchEnd={handleOnTouchEnd}
                                    />
                                </div>
                            }
                            {userCharged &&
                                <div
                                    onClick={() => toast.error("You have already charged this post")}
                                    className='cursor-pointer charge-filter-effect w-[30px] h-[30px] rounded-full flex justify-around'>
                                    <Image src="/assets/icons/already-charged-icon.svg"
                                        alt="post rewarded" width={15} height={15}
                                    />
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const VideoPost: React.FC<Feed> = ({ metadata, owner_id }) => {
    return (
        <div className='relative w-full  h-[40vh] rounded-[20px]'>

            <div className='w-full  h-full absolute rounded-[20px]'
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

                <div className='flex justify-between mt-[-2%] items-center'>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <Image src="/assets/icons/share-icon.svg" alt="Share" width={20} height={20} />
                        </div>
                        <div>
                            <Image src="/assets/icons/add-to-list-icon.svg" alt="Add to List" width={20} height={20} />
                        </div>

                    </div>

                    <div className='-mt-2 charge-filter-effect w-[30px] h-[30px] rounded-full flex justify-around'>
                        <Image src="/assets/icons/not-charged-icon.svg"
                            alt="post rewarded" width={15} height={15}
                        />
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
                    <div className='-mt-2 charge-filter-effect w-[30px] h-[30px] rounded-full flex justify-around'>
                        <Image src="/assets/icons/not-charged-icon.svg"
                            alt="post rewarded" width={15} height={15}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}


const ListFeeds: React.FC<{ searchKey: string }> = ({ searchKey }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Array<Feed>>([]);
    const [postsClone, setPostsClone] = useState<Array<Feed>>([]);
    const { feeds } = useSelector(selectPosts)
    const nearState: any = nearStore((state) => state);
    const dispatch = useDispatch();
    const [showCharge, setShowCharge] = useState<boolean>(false);
    const [showShare, setShowShare] = useState<boolean>(false);
    const [sharablePost, setSharablePost] = useState<Feed | null>(null);
    const [chargingLoading, setChargingLoading] = useState<boolean>(false);



    /* clicked post */
    const [activePost, setActivePost] = useState<Feed>();

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

    function handleOnClick(e: any) {
        console.log('handleOnClick');
        if (isLongPress.current) {
            setShowCharge(true);
            console.log('Is long press - not continuing.');
            setAction('click');
            return;
        }
        // handleSimpleCharge();
        setAction('click')
    }

    function onClick(e: any, post: Feed) {
        // alert(post.post_id)
        setActivePost(post);
        handleOnClick(e);
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
        if (action === 'longpress') return;
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
            manipulateFeeds(feeds, false);
        }
    }, [feeds])

    //Todo: fix the post id conflict, make charge button disabled after clicking
    /*  handle charging */
    const handleSimpleCharge = async (postId: string) => {
        /* call the contract method to do simple charge */
        if(chargingLoading) return;
        setIsLoading(true)
        const post_id = Number(postId);
        // alert(post_id)
        try {
            await nearState.pnftContract?.charge({
                charger_id: nearState.accountId,
                post_id: post_id,
                amount: "1000000000000000000000000",
            },
                "300000000000000"
            ).then(() => {
                getBalance(nearState)
            })
            console.log("Post Charged successfully")
            toast.success('Post charged successfully')
        } catch (err) {
            console.error("Unable to charge post due to: ", err)
            toast.error('Unable to charge post')
        }
        initPostChargersList(post_id, nearState.accountId, nearState.accountId, false);
        const postCharge = {
            post_id: post_id,
            chargers: nearState.accountId
        }
        setChargingLoading(false)
        dispatch(setPostChargers(postCharge));
    }

    //Todo: make confirm button disabled after clicking
    const handleValueBasedCharge = async (valueToCharge: number) => {
        setChargingLoading(true)
        const post_id = Number(activePost?.post_id);
        try {
            await nearState.pnftContract?.charge({
                charger_id: nearState.accountId,
                post_id: post_id,
                amount: `${valueToCharge}` + "000000000000000000000000",
            },
                "300000000000000"
            ).then(() => {
                getBalance(nearState)
            })
            console.log("Post Charged successfully")
            toast.success('Post charged successfully')
        } catch (err) {
            console.error("Unable to charge post due to: ", err)
            toast.error('Unable to charge post')
        }
        setChargingLoading(false)
        initPostChargersList(post_id, nearState.accountId, nearState.accountId, false);
        const postCharge = {
            post_id: post_id,
            chargers: nearState.accountId
        }
        // alert(JSON.stringify(postCharge))
        dispatch(setPostChargers(postCharge));
        setShowCharge(false);

    }
    /*  end of handle charging*/

    const manipulateFeeds = async (feeds: Array<Feed>, forClone: boolean) => {
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
                if (!forClone) {
                    setPosts(manipulatedFeeds);
                    setPostsClone(manipulatedFeeds)
                }
                else {
                    setPostsClone(manipulatedFeeds);
                }
            }
        })
    }

    useEffect(() => {
        handleSearchByPostTitle(searchKey);
    }, [searchKey])

    const handleSearchByPostTitle = (searchKey: string) => {
        if (searchKey === '' || searchKey === null || searchKey?.replace(/\s/g, "").length === 0) {
            setPostsClone(posts);
            return;
        }
        const filteredPosts = postsClone.filter((post: Feed) => {
            return post.metadata.title.toLowerCase().includes(searchKey.toLowerCase());
        })
        manipulateFeeds(filteredPosts, true);
    }

    const initializeShare = (feed: Feed) => {
        setSharablePost(feed);
        setShowShare(true);
    }

    return (
        <>
            <Toaster />
            <div className='w-full  flex  flex-wrap gap-2 gap-y-3'>
                {postsClone.map((post: Feed, index: number) => (
                    <div key={index}
                        style={{
                            width: (post.type === 'text') ? '60%' :
                                (post.type === 'video') ? '38%' : '38%'
                        }}>
                        {post.type === 'text' &&
                            <TextPost
                                feed={post}
                                handleOnClick={(e: any, feed: Feed) => onClick(e, feed)}
                                onClickCapture={(e: any, feed: Feed) => handleSimpleCharge(feed.post_id)}
                                handleOnMouseDown={handleOnMouseDown}
                                handleOnMouseUp={handleOnMouseUp}
                                handleOnTouchStart={handleOnTouchStart}
                                handleOnTouchEnd={handleOnTouchEnd}
                                initializeShare={initializeShare}
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
            {showCharge && <ChargePost
                onClose={() => setShowCharge(false)}
                onCharge={handleValueBasedCharge}
                loading={chargingLoading}
            />}
            {showShare && <SharePost post={sharablePost as Feed} onClose={() => setShowShare(false)} />}
        </>
    )
}
export default ListFeeds;