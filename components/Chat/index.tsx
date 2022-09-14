import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { nearStore } from '../../store/near';
import { setDirectMessages } from '../../store/slices/messagesSlice';
import { selectModules } from '../../store/slices/modulesSlices';
import { setActiveReceiver } from '../../store/slices/receiverSlice';
import { useDispatch, useSelector } from '../../store/store';
import { Feed, Post } from '../../types/Post';
import SearchInput from '../SearchInput';
import ChatRoom from './ChatRoom';

export interface IMessageItem {
    accountId: string,
    avatar: string,
    name: string,
    status: 'online' | 'offline' | 'isTyping',
    time: string,
    message: string,
    isActive?: boolean,
    onClick?: () => void;
    onClickCapture?: () => void;
}



const ChatHeader: React.FC<{ onChange: (searchValue: string) => void }> = ({ onChange }) => {
    const [isPersonalActive, setIsPersonalActive] = useState<boolean>(true);
    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <label className='font-bold text-white'>Chats</label>
                <div className='flex items-center  gap-4 text-[12px]'>
                    <div
                        onClick={() => setIsPersonalActive(true)}
                        className={`${isPersonalActive ? 'bg-primary text-white px-4 ' : ' text-red-200 '}   p-2 rounded-md cursor-pointer`}>
                        <label className={`cursor-pointer ${isPersonalActive ? ' text-white ' : 'text-gray-400'}`}>Personal</label>
                    </div>
                    <div
                        onClick={() => setIsPersonalActive(false)}
                        className={`${!isPersonalActive ? 'bg-primary text-white px-4 ' : 'text-gray-200'} p-2 rounded-md cursor-pointer`}>
                        <label className={`cursor-pointer ${!isPersonalActive ? ' text-white ' : 'text-gray-400'}`}>Work</label>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <SearchInput onChange={onChange} />
            </div>
        </div>
    )
}
const MessageItem: React.FC<IMessageItem> = ({ avatar, name, time, status, message, isActive, onClick, onClickCapture }) => {
    return (
        <div onClickCapture={onClickCapture} onClick={onClick} className={`mt-2 mr-1 ${isActive ? 'bg-[#2b2b2b] rounded-[10px]' : ''} px-3 py-2`}>
            <div className='flex items-center gap-2 cursor-pointer '>
                <div className='w-[25%] '>
                    <Image src={avatar} width={40} height={40} alt="Avatar" className='rounded-full' />
                </div>
                <div className='w-[70%] '>
                    <div className='flex justify-between'>
                        <label className='text-white text-bold text-[13px]'>
                            {name.substring(0, 15)}
                            {name.length > 15 && '...'}
                        </label>
                        {/* {status !== 'isTyping' &&
                            <label className='text-white opacity-[30%] text-[13px]'>{time}</label>
                        } */}
                    </div>
                    <div className='text-[12px] text-lighter'>
                        {status === 'isTyping' &&
                            <label className='text-primary'>Typing...</label>
                        }
                        {status !== 'isTyping' &&
                            <label className='text-white opacity-[30%] mt-1'>{message.substring(0, 15)} ...</label>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const [chats, setChats] = useState<Array<IMessageItem>>([]);
    const [chatsClone, setChatsClone] = useState<Array<IMessageItem>>([]);


    const [activeMessage, setActiveMessage] = useState<number>(0);
    const { chat, flow } = useSelector(selectModules)
    const nearState: any = nearStore((state) => state);
    const [profilePosts, setProfilePosts] = useState<any>([]);
    const [profiles, setProfiles] = useState<Array<Feed>>([]);
    const [prevChats, setPrevChats] = useState<string>();


    useEffect(() => {
        if (nearState.pnftContract) {
            fetchUsers();
        }
    }, [nearState])

    const fetchUsers = async () => {
        const posts = await nearState.pnftContract.get_all_posts({ user_id: nearState.accountId });
        const profiles = posts.filter((post: any) => post.metadata.title.includes('AERX ProfileNFT for'));
        const profilesWithoutSelf = profiles.filter((profile: any) => profile.owner_id !== nearState.accountId);
        setProfilePosts(profilesWithoutSelf);
    }

    useEffect(() => {
        if (profilePosts?.length > 0) {
            extractProfiles();
        }
    }, [profilePosts])

    const extractProfiles = async () => {
        let feeds: Array<Feed> = [];
        profilePosts.map(async (feed: Feed, index: number) => {
            try {
                const profile = await nearState.pnftContract?.profile_by_id({
                    user_id: feed.owner_id,
                    user_to_find_id: feed.owner_id
                });
                let newFeed = { ...feed }
                newFeed.profile = profile;
                feeds.push(newFeed);
            }
            catch (e) {
                console.log("ERROR in usefetchpost");
            }
            if ((index + 1) == profilePosts.length) {
                setProfiles(feeds);
            }
        })
    }

    useEffect(() => {
        formMessageItem();
    }, [profiles])

    const formMessageItem = () => {
        const messageItems: Array<IMessageItem> = [];
        profiles.map((profile: Feed) => {
            const messageItem: IMessageItem = {
                accountId: profile.owner_id,
                avatar: profile?.metadata?.media || '/assets/images/avatar-1.svg',
                name: profile?.profile?.metadata?.extra || profile?.profile?.owner_id || '',
                status: 'online',
                time: '12:00',
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
            }
            messageItems.push(messageItem);
        })
        setChats(messageItems);
        setChatsClone(messageItems);
    }

    const AWS = require('aws-sdk');
    const filebase = new AWS.S3({
        endpoint: 'https://s3.filebase.com',
        signatureVersion: 'v4',
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,

    });
    const getChat = (caller: string, receiver: string) => {
        const params = {
            Key: `aerx-chat between ${caller},${receiver}`,
            Bucket: "aerx-chats"
        };
        try {
            return filebase.getObject(params, (err: any, data: any) => {
                if (err) {
                    const param = {
                        Key: `aerx-chat between ${receiver},${caller}`,
                        Bucket: "aerx-chats"
                    };
                    filebase.getObject(param, (err: any, data: any) => {
                        if (err) {
                            console.log("Chat does not exist")
                        } else {
                            const prevChat = Buffer.from(data.Body, 'utf8').toString();
                            nearState.setPrevChats(prevChat)
                            setPrevChats(prevChat)
                            return prevChat;
                        }
                    });
                } else {
                    const prevChat = Buffer.from(data.Body, 'utf8').toString();
                    nearState.setPrevChats(prevChat)
                    setPrevChats(prevChat)
                    return prevChat;
                }
            })
        } catch (err) {
            console.error("try caught error: ", err);

        }

    }

    const handleSetActiveMessage = async () => {
        if (nearState.prevChats != null && prevChats != null && nearState.prevChats == prevChats) {
            const chatArray = nearState.prevChats.split("\n");
            for (let i = 0; i < chatArray.length; i++) {
                const json = JSON.parse(chatArray[i]);
                console.log(json)
                console.log("time: ", json[0])
                console.log("sender: ", json[1])
                console.log("message: ", json[2])
            }
            nearState.removePrevChats();
        }

    }

    const handleCapture = async (index: number) => {
        setActiveMessage(index);
        dispatch(setActiveReceiver(chats[index].accountId));
        console.log(chats[index].accountId)
        await getChat(nearState.accountId, chats[index].accountId);
    }

    const handleSearchName = async (searchValue: string) => {
        if (searchValue === '' || searchValue === null || searchValue.replace(/\s/g, "").length === 0) {
            return setChatsClone(chats);
        }
        const filteredChats = chatsClone.filter((chat: IMessageItem) => chat.name.toLowerCase().includes(searchValue.toLowerCase()));
        setChatsClone(filteredChats);
    }


    return (
        <div className='w-full h-[100%] bg-black-dark rounded-[10px] flex gap-2 '>
            {!chat.minimized &&
                <div className='w-[45%] h-full rounded-[10px] bg-black-light  p-4'
                    style={{
                        // width: (chat.minimized) ? "0%" : ""
                    }}
                >
                    <ChatHeader onChange={handleSearchName} />

                    <div className='h-[80%] '>
                        <div className='flex gap-2 mt-4'>
                            {/* <Image src="/assets/icons/pin-icon.svg" alt="Pin" width={13} height={13} /> */}
                            {/* <label className='text-[14px] text-white opacity-[15%]'>Pinned</label> */}
                            <Image src="/assets/icons/fill-icon.svg" alt="Pin" width={13} height={13} />
                            <label className='text-[14px] text-white opacity-[15%]'>All Charts</label>
                        </div>
                        <div className="bg-redd-500 h-full overflow-y-scroll">
                            {chatsClone.map((message, index) => (
                                <MessageItem onClickCapture={() => handleCapture(index)} key={index} {...message} isActive={activeMessage === index ? true : false} onClick={() => handleSetActiveMessage()} />
                            ))
                            }
                        </div>
                    </div>

                    {/* <div>
                        <div className='flex gap-2 mt-4'>
                            <Image src="/assets/icons/fill-icon.svg" alt="Pin" width={13} height={13} />
                            <label className='text-[14px] text-white opacity-[15%]'>All Charts</label>
                        </div>
                        <div>
                            {allChats.map((message, index) => (
                                <MessageItem key={index} {...message} isActive={false} />
                            ))
                            }
                        </div>
                    </div> */}
                </div>
            }
            <div className='w-[55%] h-full'
                style={{
                    width: (chat.minimized) ? "100%" : "",
                }}
            >
                <ChatRoom activeMessage={chats[activeMessage]} />
            </div>
        </div>
    )
}

export default Chat;