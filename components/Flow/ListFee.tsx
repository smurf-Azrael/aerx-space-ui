import React, { useEffect, useState, useRef } from "react";
// import Image from 'next/image';
import toast, { Toaster } from "react-hot-toast";
import { tempoFeed, videoFeed } from "../../helpers/data/feeds";
import { initNearConnection } from "../../lib/auth";
import { nearStore } from "../../store/near";
import { Feed, Tempo } from "../../types/Post";
import VideoControl from "../VideoControl";
import { generateRandomColor } from "../../helpers/utils/generateRadomColor";
import { useDispatch, useSelector } from "../../store/store";
import { useGetPosts } from "../../hooks/useGetPosts";
import { selectPosts } from "../../store/slices/postsSlice";
import ChargePost from "../ChargePost";
import useLongPress from "../../hooks/useLongPress";
import { selectChargePostEvent } from "../../store/slices/chargePostEventsSlice";
import { error } from "console";
import { getBalance } from "../../lib/aexContract";
import SharePost from "../SharePost";
import { Feedback } from "aws-sdk/clients/applicationinsights";
import {
  getPostChargers,
  initPostChargersList,
} from "../../lib/chargeFilebase";
import {
  selectPostChargers,
  setPostChargers,
} from "../../store/slices/postChargesSlice";
import dynamic from "next/dynamic";
import { Box, Text, Flex, Image, Center } from "@chakra-ui/react";

const ThreeDModel = dynamic(() => import("../3DModel"), { ssr: false });

// coverImage, postOwner, nftId, title, description
interface IProps {
  feed: Feed;
  handleOnClick: (e: any, feed: Feed) => void;
  onClickCapture: (e: any, feed: Feed) => void;
  handleOnMouseDown: (e: any) => void;
  handleOnMouseUp: (e: any) => void;
  handleOnTouchStart: (e: any) => void;
  handleOnTouchEnd: (e: any) => void;
  initializeShare: (feed: Feed) => void;
}
const TextPost: React.FC<IProps> = ({
  feed,
  handleOnClick,
  handleOnMouseDown,
  handleOnMouseUp,
  handleOnTouchStart,
  handleOnTouchEnd,
  initializeShare,
  onClickCapture,
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
  }, [feed]);

  useEffect(() => {
    findIfUserCharged();
  }, [postChargers]);

  const getChargeStatus = async () => {
    const chargers = await getPostChargers(feed.post_id, false, dispatch);
    console.log("post chargers", chargers);
  };

  const findIfUserCharged = async () => {
    if (postChargers && postChargers.length > 0) {
      postChargers.forEach((charger) => {
        if (charger.post_id == feed.post_id) {
          const findIndex = charger.chargers.findIndex(
            (charger) => charger == nearState.accountId
          );
          if (findIndex > -1) {
            setUserCharged(true);
          }
        }
      });
    }
  };

  const [containerStyle, setContainerStyle] = useState<any>({
    backgroundImage: `url(${metadata?.media})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

  useEffect(() => {
    if (metadata.media?.includes(".glb") || !metadata.media) {
      setContainerStyle({
        backgroundImage: `url(${metadata.media})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: "linear-gradient(180deg, #6054F0 0%, #332B8D 100%)",
      });
    }
  }, [metadata]);

  return (
    <Box
      width="306.88px"
      height="295.92px"
      style={containerStyle}
      borderRadius="10.96px"
      padding="16px"
      flexDirection="column"
    //   mr="8px"

    >
      <Flex justifyContent="space-between">
        <Flex gap="5.48px">
          <Box>
            {!(profile?.metadata?.media as string)?.includes(".glb") && (
              <Image
                src={
                  (profile?.metadata?.media as string) ||
                  "/assets/images/avatar-1.svg"
                }
                className="w-8 h-8 rounded-full"
                alt={`${owner_id}'s avatar`}
                width="27.4px"
                height="27.4px"
              />
            )}
            {profile?.metadata?.media?.includes(".glb") && (
              <div
                className="rounded-full border-[1px] border-white"
                style={{ width: "27.4px", height: "27.4px", margin: "auto" }}
              >
                <ThreeDModel
                  src={
                    Array.isArray(profile?.metadata?.media)
                      ? profile?.metadata?.media[0]
                      : profile?.metadata?.media
                  }
                />
              </div>
            )}
          </Box>
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="600"
            fontSize="10.96px"
            lineHeight="100%"
            letterSpacing="-0.02em"
            color="#FFFFFF"
            marginTop="8.22px"
          >
            {profile?.metadata?.extra || owner_id}
          </Text>
        </Flex>
        <Box>
          <Flex
            gap="8.9px"
            alignItems="center"
            backgroundColor="#ffffff33"
            height="27.4px"
            px="6px"
            borderRadius="34.25px"
          >
            <Image
              src="/assets/icons/nft-icon.svg"
              alt="NFT"
              width="16.44px"
              height="16.44px"
            />
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="9.59px"
              lineHeight="100%"
              letterSpacing="-0.02em"
              color="#FFFFFF"
            >
              ee34ad4
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex marginTop={"130.15px"} flexDirection="column" height="78.09">
        <Box width="284.96" maxHeight="39.73px">
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="700"
            fontSize="16.44px"
            lineHeight="100%"
            letterSpacing="-0.02em"
            color="#FFFFFF"
          >
            {metadata.title}
          </Text>
        </Box>

        <Box mt="3.7538px" width="284.96" height="32.88px">
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="10.96px"
            lineHeight="150%"
            letterSpacing="-0.02em"
            color="#FFFFFFE5"
          >
            {metadata?.description}{" "}
          </Text>
        </Box>
      </Flex>
      <Flex gap="55%" alignItems="center">
        <Box mt={1}>
          <Flex>
            <div className="hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]">
              <Image
                className="cursor-pointer"
                src="/assets/icons/comment-icon.svg"
                alt="comment"
                width="13.7px"
                height="13.7px"
              />
            </div>
            <div className="hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]">
              <Image
                src="/assets/icons/share-icon.svg"
                alt="share"
                width="13.7px"
                height="13.7px"
                className="cursor-pointer "
                onClick={(e) => initializeShare(feed)}
              />
            </div>
            <div className="hover:bg-[#ffffff3a] flex justify-around cursor-pointer  p-1 rounded-full w-[30px] h-[30px]">
              <Image
                className="cursor-pointer"
                src="/assets/icons/save-post-icon.svg"
                alt="save"
                width="13.7px"
                height="13.7px"
              />
            </div>
          </Flex>
        </Box>
        <Box>
          {!feed?.metadata?.title.includes("AERX ProfileNFT for") && (
            <div>
              {
                !userCharged && (
                  // <div className='cursor-pointer charge-filter-effect w-[30px] h-[30px] rounded-full flex justify-around'>
                  <Image
                    src="../resources/Group 139691.png"
                    alt="charge post"
                    width="27.4px"
                    height="27.4px"
                    className="cursor-pointer"
                    onClick={(e) => handleOnClick(e, feed)}
                    onClickCapture={(e) => onClickCapture(e, feed)}
                    onMouseDown={handleOnMouseDown}
                    onMouseUp={handleOnMouseUp}
                    onTouchStart={handleOnTouchStart}
                    onTouchEnd={handleOnTouchEnd}
                  />
                )
                // </div>
              }
              {userCharged && (
                <div
                  onClick={() =>
                    toast.error("You have already charged this post")
                  }
                  className="cursor-pointer charge-filter-effect  rounded-full flex justify-around"
                >
                  <Image
                    src="../resources/Group 13969.png"
                    alt="post rewarded"
                    width="27.4px"
                    height="27.4px"
                  />
                </div>
              )}
            </div>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

const VideoPost: React.FC<Feed> = ({ metadata, owner_id }) => {
  return (
    <Flex
      width="164.44px"
      height="295.92px"
      bgImage={`url('${metadata?.media}')`}
      borderRadius="10.275px"
      marginLeft={0}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      flexDirection="column"
      padding="10.96px"
    >
      <Flex flexDirection="column" gap="48.635px">
        <Flex>
          <Image
            src="../resources/Ellipse 675.png"
            alt={owner_id}
            width="27.4px"
            height="27.4px"
          />
          <Flex flexDirection="column">
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="10.96px"
              lineHeight="100%"
              letterSpacing="-0.02em"
              color="#FFFFFF"
            >
              {owner_id} hell
            </Text>
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="9.59px"
              lineHeight="100%"
              letterSpacing="-0.02em"
              color="#FFFFFF"
            >
              Scriptonite
            </Text>
            {/* <label className='text-[13px] text-white'>{owner_id}</label> */}
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <Flex
            bgImage="url('assets/images/cover-image-5.jpeg') "
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="126.04px"
            height="126.04px"
            border="15%"
            borderColor="white"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/assets/icons/play-icon.svg"
              alt="Play video"
              width="21.92px"
              height="18.93px"
            />
          </Flex>

          {/* <Image src="../resources/Rectangle 3467.png" /> */}
          <Box mt="12.33px">
            <VideoControl />
          </Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex className="flex gap-4 items-center">
              <Image
                src="/assets/icons/share-icon.svg"
                alt="Share"
                width="16.44px"
                height="16.44px"
              />

              <Image
                src="/assets/icons/add-to-list-icon.svg"
                alt="Add to List"
                width="16.44px"
                height="16.44px"
              />
            </Flex>

            <Box className=" charge-filter-effect  rounded-full flex justify-around mt-1">
              <Image
                src="../resources/Group 139691.png"
                alt="post rewarded"
                width="27.4px"
                height="27.4px"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const TempoPost: React.FC<Feed> = ({ owner_id, metadata }) => {
  // const GetTempo = () => {
  //    const returnedTempo:Tempo = {
  //     userId:
  //    }

  // }

  return (
    <Flex
      width="164.44px"
      height="295.92px"
      bgImage="url('assets/images/cover-image-2.svg') "
      borderRadius="10.275px"
      marginLeft={0}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      flexDirection="column"
      padding="10.96px"
      gap="117.135px"
    >
      <Flex justifyContent="space-between">
        <Image
          src="../resources/Label.png"
          alt="tempo post"
          width="27.4px"
          height="27.4px"
          alignContent="center"
        />
        <Image
          src="/assets/icons/play-icon.svg"
          alt="play"
          width="16.44px"
          height="14.2px"
          marginTop="5.48px"
        />
      </Flex>
      <Flex flexDirection="column">
        <Center>
          <Image
            src="/assets/images/avatar-4.svg"
            alt={`${owner_id}'s avatar`}
            width="27.4px"
            height="27.4px"
          />
        </Center>
        <Center>
          <Box height="24px" width="121px">
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="10.96px"
              lineHeight="100%"
              letterSpacing="-0.02em"
              color="#FFFFFF"
              mt="10.96px"
              textAlign="center"
            >
              {owner_id}
            </Text>
          </Box>
        </Center>
        <Center>
          <Box height="24px" width="121px">
            <Text
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="9.59px"
              lineHeight="100%"
              letterSpacing="-0.02em"
              color="#FFFFFF"
              mt="4.96px"
              textAlign="center"
            >
              {metadata.title}
            </Text>
          </Box>
        </Center>
        <Flex mt="28.255px" justifyContent="space-evenly" alignItems="center">
          <Box>
            <Image
              src="/assets/icons/comment-icon.svg"
              alt="comment"
              width="16.44px"
              height="16.44px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/icons/share-icon.svg"
              alt="comment"
              width="16.44px"
              height="16.44px"
            />
          </Box>
          <Box>
            <Image
              src="/assets/icons/save-post-icon.svg"
              alt="comment"
              width="16.44px"
              height="16.44px"
            />
          </Box>
          <Box className="charge-filter-effect  rounded-full flex justify-around">
            <Image
              src="/assets/icons/not-charged-icon.svg"
              alt="post rewarded"
              width="16.44px"
              height="16.44px"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>

  );
};

const ListFeeds: React.FC<{ searchKey: string }> = ({ searchKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Array<Feed>>([]);
  const [postsClone, setPostsClone] = useState<Array<Feed>>([]);
  const { feeds } = useSelector(selectPosts);
  const nearState: any = nearStore((state) => state);
  const dispatch = useDispatch();
  const [showCharge, setShowCharge] = useState<boolean>(false);
  const [showShare, setShowShare] = useState<boolean>(false);
  const [sharablePost, setSharablePost] = useState<Feed | null>(null);
  const [chargingLoading, setChargingLoading] = useState<boolean>(false);

  /* clicked post */
  const [activePost, setActivePost] = useState<Feed>();

  /* Start of event tracking */
  const [action, setAction] = useState("click");
  const timerRef: any = useRef();
  const isLongPress: any = useRef();

  function startPressTimer() {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction("longpress");
    }, 500);
  }

  function handleOnClick(e: any) {
    console.log("handleOnClick");
    if (isLongPress.current) {
      setShowCharge(true);
      console.log("Is long press - not continuing.");
      setAction("click");
      return;
    }
    // handleSimpleCharge();
    setAction("click");
  }

  function onClick(e: any, post: Feed) {
    // alert(post.post_id)
    setActivePost(post);
    handleOnClick(e);
  }

  function handleOnMouseDown() {
    console.log("handleOnMouseDown");
    startPressTimer();
  }

  function handleOnMouseUp() {
    console.log("handleOnMouseUp");
    clearTimeout(timerRef.current);
  }

  function handleOnTouchStart() {
    console.log("handleOnTouchStart");
    startPressTimer();
  }

  function handleOnTouchEnd() {
    if (action === "longpress") return;
    console.log("handleOnTouchEnd");
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
  }, [feeds]);

  //Todo: fix the post id conflict, make charge button disabled after clicking
  /*  handle charging */
  const handleSimpleCharge = async (postId: string) => {
    /* call the contract method to do simple charge */
    if (chargingLoading) return;
    setIsLoading(true);
    const post_id = Number(postId);
    // alert(post_id)
    try {
      await nearState.pnftContract
        ?.charge(
          {
            charger_id: nearState.accountId,
            post_id: post_id,
            amount: "1000000000000000000000000",
          },
          "300000000000000"
        )
        .then(() => {
          getBalance(nearState);
        });
      console.log("Post Charged successfully");
      toast.success("Post charged successfully");
    } catch (err) {
      console.error("Unable to charge post due to: ", err);
      toast.error("Unable to charge post");
    }
    initPostChargersList(
      post_id,
      nearState.accountId,
      nearState.accountId,
      false
    );
    const postCharge = {
      post_id: post_id,
      chargers: nearState.accountId,
    };
    setChargingLoading(false);
    dispatch(setPostChargers(postCharge));
  };

  //Todo: make confirm button disabled after clicking
  const handleValueBasedCharge = async (valueToCharge: number) => {
    setChargingLoading(true);
    const post_id = Number(activePost?.post_id);
    try {
      await nearState.pnftContract
        ?.charge(
          {
            charger_id: nearState.accountId,
            post_id: post_id,
            amount: `${valueToCharge}` + "000000000000000000000000",
          },
          "300000000000000"
        )
        .then(() => {
          getBalance(nearState);
        });
      console.log("Post Charged successfully");
      toast.success("Post charged successfully");
    } catch (err) {
      console.error("Unable to charge post due to: ", err);
      toast.error("Unable to charge post");
    }
    setChargingLoading(false);
    initPostChargersList(
      post_id,
      nearState.accountId,
      nearState.accountId,
      false
    );
    const postCharge = {
      post_id: post_id,
      chargers: nearState.accountId,
    };
    // alert(JSON.stringify(postCharge))
    dispatch(setPostChargers(postCharge));
    setShowCharge(false);
  };
  /*  end of handle charging*/

  const manipulateFeeds = async (feeds: Array<Feed>, forClone: boolean) => {
    const newList = [...feeds].reverse();
    let manipulatedFeeds: Feed[] = [];
    let row = 1;
    newList?.map((feed: Feed, index: number) => {
      if (row % 2 !== 0) {
        manipulatedFeeds.push({ ...feed, type: "text" });
        manipulatedFeeds.push(videoFeed);
      } else {
        manipulatedFeeds.push(tempoFeed);
        manipulatedFeeds.push({ ...feed, type: "text" });
      }
      row += 1;
      if (index === newList.length - 1) {
        if (!forClone) {
          setPosts(manipulatedFeeds);
          setPostsClone(manipulatedFeeds);
        } else {
          setPostsClone(manipulatedFeeds);
        }
      }
    });
  };

  useEffect(() => {
    handleSearchByPostTitle(searchKey);
  }, [searchKey]);

  const handleSearchByPostTitle = (searchKey: string) => {
    if (
      searchKey === "" ||
      searchKey === null ||
      searchKey?.replace(/\s/g, "").length === 0
    ) {
      setPostsClone(posts);
      return;
    }
    const filteredPosts = postsClone.filter((post: Feed) => {
      return post.metadata.title
        .toLowerCase()
        .includes(searchKey.toLowerCase());
    });
    manipulateFeeds(filteredPosts, true);
  };

  const initializeShare = (feed: Feed) => {
    setSharablePost(feed);
    setShowShare(true);
  };

  return (
    <>
      <Toaster />
      <div className="w-full  flex  flex-wrap gap-2 gap-y-3">
        {postsClone.map((post: Feed, index: number) => (
          <div
            key={index}
            style={{
              width:
                post.type === "text"
                  ? "60%"
                  : post.type === "video"
                    ? "38%"
                    : "38%",
            }}
          >
            {post.type === "text" && (
              <TextPost
                feed={post}
                handleOnClick={(e: any, feed: Feed) => onClick(e, feed)}
                onClickCapture={(e: any, feed: Feed) =>
                  handleSimpleCharge(feed.post_id)
                }
                handleOnMouseDown={handleOnMouseDown}
                handleOnMouseUp={handleOnMouseUp}
                handleOnTouchStart={handleOnTouchStart}
                handleOnTouchEnd={handleOnTouchEnd}
                initializeShare={initializeShare}
              />
            )}
            {post.type === "video" && <VideoPost {...post} />}
            {post.type === "tempo" && <TempoPost {...post} />}
          </div>
        ))}
      </div>
      {showCharge && (
        <ChargePost
          onClose={() => setShowCharge(false)}
          onCharge={handleValueBasedCharge}
          loading={chargingLoading}
        />
      )}
      {showShare && (
        <SharePost
          post={sharablePost as Feed}
          onClose={() => setShowShare(false)}
        />
      )}
    </>
  );
};
export default ListFeeds;
