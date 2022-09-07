import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Message } from '../../types/Message'
import { EMessageType } from '../../enums/EMessageType';
import { useDispatch, useSelector } from '../../store/store';
import { collapseChat, minimizeChat, selectModules } from '../../store/slices/modulesSlices';
import SendTokens from '../SendTokens';
import { IMessageItem } from '.';
import { listBuckets, sendMessage, getChat } from '../../lib/aerxChat'
import { nearStore } from '../../store/near';

const PrimaryHeader: React.FC = () => {
    const { chat } = useSelector(selectModules);
    const dispatch = useDispatch();
    const handleCollapseChat = () => {
        if (chat.default) {
            dispatch(minimizeChat());
        }
        else if (chat.minimized) {
            dispatch(collapseChat());
        }
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <div className='mt-0'>
                    <Image src={"/assets/icons/chat-room-header-ico.svg"} alt="voluengr" width={35} height={35} />
                </div>
                <div className=''>
                    <label className='text-white text-sm font-semibold'>Valuengr</label>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <div className='mt-1'>
                    <Image src="/assets/icons/add-user-icon.svg" alt="Add new user" width={15} height={15} />
                </div>
                <div className='mt-2 cursor-pointer' onClick={handleCollapseChat}>
                    <Image src="/assets/icons/chat-room-menu-icon.svg" alt="Menu" width={30} height={30} />
                </div>
            </div>
        </div>
    )
}

const SecondaryHeader: React.FC<{
    activeMessage: IMessageItem
}> = ({ activeMessage }) => {
    return (
        <div className='flex justify-between items-center mt-2 px-3 py-2'>
            <div className='flex items-center gap-4 cursor-pointer '>
                <div>
                    <Image src={activeMessage?.avatar || "/assets/images/avatar-1.svg"} width={40} height={40} alt="Avatar" className='rounded-full' />
                </div>
                <div>
                    <div className='flex justify-between'>
                        <label className='text-white text-bold text-[14px]'>
                            {activeMessage?.name}
                        </label>

                    </div>
                    <div className='text-sm text-lighter'>
                        <label className='text-white opacity-[30%] mt-1'>Last seen recently</label>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-2'>
                    <Image src="/assets/icons/audio-call-icon.svg" alt='Phone' width={15} height={15} />
                    <Image src="/assets/icons/video-call-icon.svg" alt='Video' width={15} height={15} />
                </div>
            </div>
        </div>
    )
}

const MessagesWrapper: React.FC<{activeReceiver: IMessageItem}> = ({ activeReceiver }) => {
    const userId: string = '2';
    const nearState = nearStore((state) => state);
    const messages: Array<Message> = [
        {
            id: '1',
            sender: {
                id: '1',
                name: 'Peter White',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '2',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: 'Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam.',
            type: EMessageType.TEXT
        },
        {
            id: '1',
            sender: {
                id: '2',
                name: 'Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam.',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '1',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: 'Hello, how are you?',
            type: EMessageType.TEXT
        },
        {
            id: '1',
            sender: {
                id: '2',
                name: 'Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam.',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '1',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: 'Consectet adipiscing',
            type: EMessageType.TEXT
        },
        {
            id: '1',
            sender: {
                id: '1',
                name: 'Peter White',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '2',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: '+12 786 ae',
            type: EMessageType.ACTION,
            createdAt: '02:00'
        },
        {
            id: '1',
            sender: {
                id: '1',
                name: 'Peter White',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '2',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: '+12 786 ae',
            type: EMessageType.AUDIO
        },
        {
            id: '1',
            sender: {
                id: '2',
                name: 'Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam.',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '1',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: 'Consectet adipiscing elit ut aliquam.',
            type: EMessageType.TEXT
        },
        {
            id: '1',
            sender: {
                id: '1',
                name: 'Peter White',
                avatar: '/assets/images/avatar-1.svg'
            },
            recipient: {
                id: '2',
                name: 'John Doe',
                avatar: '/assets/images/avatar-2.svg'
            },
            content: 'Lorem ipsum dolor sit amet, consectet adipiscing elit ut aliquam.',
            type: EMessageType.TEXT
        }
    ];

    /* get messages */
    const [chatMessages, setChatMessages] = useState<Array<IMessageItem>>([]);

    useEffect(() => {
    getMessages();
    },[activeReceiver])

    const getMessages = async () => {
        // alert("get messages "+activeReceiver?.accountId+" "+nearState.accountId)
        const messages = await getChat(activeReceiver?.accountId, nearState.accountId);
        console.log("messages ...", messages);
    }
    /* end get messages*/

    const RenderSenderMessage: React.FC<{ content: string, type: EMessageType }> = ({ content, type }) => {
        return (
            <div className='flex'>
                <div className='ml-auto bg-black-light p-3 px-4 w-[max-content] max-w-[90%]' style={{ borderRadius: '20px 20px 0px 20px' }}>
                    {type === EMessageType.TEXT &&
                        <p className='text-white text-[11px]'>
                            {content}
                        </p>
                    }
                    {type === EMessageType.AUDIO &&
                        <Image src="/assets/icons/audio-icon.svg" alt="voice note" width={20} height={20} />
                    }
                </div>
            </div>
        )
    }

    const RenderRecipientMessage: React.FC<{ content: string, type: EMessageType }> = ({ content, type }) => {
        return (
            <div className='bg-primary p-3 px-4 w-[max-content] max-w-[90%]' style={{ borderRadius: '20px 20px 20px 0px' }}>
                {type === EMessageType.TEXT &&
                    <p className='text-white text-[11px]'>
                        {content}
                    </p>
                }
                {type === EMessageType.AUDIO &&
                    <Image src="/assets/icons/audio-icon.svg" alt="voice note" width={100} height={30} className="" />
                }
            </div>
        )
    }

    const RenderAction: React.FC<{ content: string, time: string }> = ({ content, time }) => {
        return (
            <div className='rounded-[20px] border-white border border-opacity-[15%]  flex justify-between px-4 py-3 items-center border-dashed'>
                <div className='flex gap-2 items-center'>
                    <Image src="/assets/icons/save-icon.svg" alt="save" width={30} height={30} />
                    <label className='text-white font-bolder'>{content}</label>
                    <label className='text-sm'>Received</label>
                </div>
                <div>
                    <label className='text-sm'>{time}</label>
                </div>
            </div>
        )
    }

    return (
        <div>
            {messages.map(({ sender, recipient, content, type, createdAt }: Message, index: number) => (
                <div key={index} className="mt-4">
                    {type !== EMessageType.ACTION &&
                        <>
                            {sender?.id === userId &&
                                <RenderSenderMessage content={content} type={type} />
                            }
                            {sender?.id !== userId &&
                                <RenderRecipientMessage content={content} type={type} />
                            }
                        </>
                    }
                    {type === EMessageType.ACTION &&
                        <RenderAction content={content} time={createdAt as string} />
                    }

                </div>
            ))}
        </div>
    )
}

const SendMessage: React.FC<{
    onSend: () => void,
    activeReceiver: IMessageItem
}> = ({ onSend, activeReceiver }) => {
    const [message, setMessage] = useState<string>('');
    const nearState = nearStore((state) => state);

    const handleSendMessage = async () => {
        const response = await sendMessage(nearState.accountId, activeReceiver.accountId, ' AEX-MESSAGE- MESSAGE-SENDER-'+nearState.accountId+" MESSAGE-"+message);
        console.log(JSON.stringify(response));
    }

    return (
        <div className='flex justify-between '>
            <div className='flex gap-3 w-[80%]'>
                <Image src="/assets/icons/tag-icon.svg" alt="Tag" width={20} height={20} />
                <textarea
                    placeholder="Type message..."
                    className=".placeholder-black-light bg-transparent focus:outline-none w-[90%]
              text-white text-[11px] mt-4 " style={{
                        resize: 'none',
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                />
            </div>

            <div className='w-[15%] '>
                <Image src="/assets/icons/send-message-icon.svg" alt="send message" width={40} height={40}
                    className="cursor-pointer" onClick={onSend} />
            </div>
        </div>
    )
}

const ChatRoom: React.FC<{
    activeMessage: IMessageItem
}> = ({ activeMessage }) => {
    const [initializeSendToken, setInitializeSendToken] = useState<boolean>(false);
    return (
        <>
            <div className='p-2'>
                <PrimaryHeader />
                <SecondaryHeader activeMessage={activeMessage} />
                <div className='h-[75vh] flex flex-col justify-between'>
                    <MessagesWrapper activeReceiver={activeMessage} />
                    <SendMessage onSend={() => setInitializeSendToken(true)}
                        activeReceiver={activeMessage} />
                </div>
            </div>
            {initializeSendToken && <SendTokens onClose={() => setInitializeSendToken(false)} />}
        </>
    )
}

export default ChatRoom;