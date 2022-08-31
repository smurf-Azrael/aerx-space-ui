import Image from 'next/image';
import React, { useEffect } from 'react'
import { NFT } from '../../../../types/NFT';
import Button from '../../../Elements/Button';
import StepIndicator from '../../../StepIndicator';

interface IProps{
   setNFTsSelected: (nfts: Array<NFT>) => void,
   setFlow: (flow: number) => void
}

export const nfts: NFT[] = [
    {
        id: 1,
        media: '/assets/images/nft-2.jpeg',
        name: 'NFT One',
        author_name: 'Author Name'
    },
    {
        id: 2,
        media: '/assets/images/nft-2.jpeg',
        name: 'NFT Two',
        author_name: 'Author Name'
    },
    {
        id: 3,
        media: '/assets/images/nft-3.jpeg',
        name: 'NFT Three',
        author_name: 'Author Name'
    },
    {
        id: 4,
        media: '/assets/images/nft-2.jpeg',
        name: 'NFT Four',
        author_name: 'Author Name'
    },
    {
        id: 5,
        media: '/assets/images/nft-2.jpeg',
        name: 'NFT Five',
        author_name: 'Author Name'
    },
    {
        id: 6,
        media: '/assets/images/nft-2.jpeg',
        name: 'NFT Six',
        author_name: 'Author Name'
    },
]

const SelectNFTs: React.FC<IProps> = ({setNFTsSelected, setFlow}) => {
   
    const [selectedNFTS, setSelectedNFTs] = React.useState<Array<number>>([]);
    const selectedNftStyle = {
        border: '3px solid #6054F0',
        borderRadius: '10px',

       
    }

    const handleSelectNFT = (nftId: number) => {
        if(selectedNFTS.includes(nftId)){
            setSelectedNFTs(selectedNFTS.filter(id => id !== nftId));
        }
        else{
            setSelectedNFTs([...selectedNFTS, nftId]);
        }
    }

    useEffect(() => {
       const selectedNfts = nfts.filter(nft => selectedNFTS.includes(nft.id));
       setNFTsSelected(selectedNfts);
    },[selectedNFTS])
    return (
        <div className='w-[35vw] p-4'>
            <div className='w-full flex justify-around'>
                <label className='text-white'>Select NFT</label>
            </div>
            <div  className='mt-4 h-[40vh] overflow-y-scroll nft-container'>
                <div className='grid grid-cols-3 relative'>
                {nfts.map((nft) => (
                    <div className='w-[143px] h-[200px] relative mt-3 ' onClick={() => handleSelectNFT(nft.id)}
                     style={(selectedNFTS.includes(nft?.id)) ? selectedNftStyle : {}}
                    >
                    <div className=''>
                        <Image src={nft.media}  layout='fill' objectFit='contain' 
                        className='rounded-[10px]'
                        />
                    </div>
                    
                    {!selectedNFTS.includes(nft.id) && 
                    <div className='absolute top-[70%] px-4  w-full'>
                        <div className='flex flex-col text-[11px] backdrop-blur-sm p-2  rounded-[10px] '>
                        <label className='text-white  ' style={{fontWeight:'bolder'}}>{nft.name}</label>
                        <label className='text-white'>{nft.author_name}</label>
                       </div>
                    </div>
                    }

                    {selectedNFTS.includes(nft.id) && 
                    <div className='absolute top-0 w-full h-full bg-[#6154f05b] rounded-[10px]'>
                        <div className='flex justify-around items-center h-full'>
                            <div className='w-[30px] text-[11px] h-[30px] flex justify-around items-center bg-white text-purple rounded-full'>
                                {selectedNFTS.findIndex(id => id === nft.id) + 1}
                            </div>
                        </div>
                    </div>
                    }
                    </div>
                ))}
                </div>
            </div>
            <div className='mt-4'>
                <Button 
                 onClick={() => setFlow(3)}
                 label={`Confirm: ${selectedNFTS.length} NFT's`}
                />
            </div>
            <div className='flex justify-around w-full mt-4'>
                <div className='flex gap-4'>
                <StepIndicator bg='purple' />
                <StepIndicator />
                </div>
            </div>
        </div>
    )
}

export default SelectNFTs;