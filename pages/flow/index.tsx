import React, { useEffect, useState } from "react";
import Chat from "../../components/Chat";
import CollapsingSidebar from "../../components/CollapsingSidebar";
import FlowFeeds from "../../components/Flow";
import Space from "../../components/Space";
import {
  expandChat,
  expandFlow,
  expandSpace,
  selectModules,
} from "../../store/slices/modulesSlices";
import { useDispatch, useSelector } from "../../store/store";
import Collapse from "../../components/Profiles/Collapse";
import Wallets from "../../components/BranchWallet/tokenWallet";
import Pools from "../../components/BranchWallet/Pools";
import Exchange from "../../components/BranchWallet/Exchange";
import SendTokens from "../../components/BranchWallet/SendTokens";
import AddLiquidity from "../../components/BranchWallet/AddLiquidity";
import RecieveToken from "../../components/BranchWallet/RecieveToken";
import NewProfile from "../../components/Profiles/NewProfile";

const Flow: React.FC = () => {
  
    // start

  const [isToggle, setToggle] = useState(false);
  const [doubleclicked, setDoubleClicked] = useState(false);
  const [isOpenWallet, setOpenWallet] = useState(false);

  const [isUpload, setUpload] = React.useState(false);

  const [isExchange, setExchange] = React.useState(false);

  const [isPool, setPool] = React.useState(false);

  const [isLiquidity, setLiquidity] = React.useState(false);

  const [isRecieved, setRecieved] = React.useState(false);

  const changeUpload = () => {
    setUpload((prevState) => !prevState);
  };
  const changeExchange = () => {
    setExchange((prevState) => !prevState);
  };
  const changePool = () => {
    setPool((prevState) => !prevState);
  };
  const changeLiquidity = () => {
    setLiquidity((prevState) => !prevState);
  };
  const changeRecieve = () => {
    setRecieved((prevState) => !prevState);
  };
  const toggleClick = () => {
    setToggle((prevState) => !prevState);
   
  };

  const doubleClick = (e: any) => {
    if (e.detail == 2) {
      setDoubleClicked((prevState) => !prevState);
    }
  };
  const removeCircle = (e: any) => {
    if (e.detail == 1) {
      setDoubleClicked((prevState) => !prevState);
    }
  };
  const openWallet = () => {
    setOpenWallet((prevState) => !prevState);
    console.log(isOpenWallet);
  };

  const wallet = (
    <Wallets
      upload={changeUpload}
      exchange={changeExchange}
      pool={changePool}
      liquidity={changeLiquidity}
      changeAction={setToggle}
      toggle={isToggle}
      toggleWallet={openWallet}
      recieved={changeRecieve}
    />
  );

  //   end



  const dispatch = useDispatch();
  const { flow, chat, space, collections } = useSelector(selectModules);
  const [flowWidth, setFlowWidth] = useState<string>();
  const handleChatClicked = () => {
    dispatch(expandChat());
  };
  const handleFlowClicked = () => {
    dispatch(expandFlow());
  };
  const handleSpaceClicked = () => {
    dispatch(expandSpace());
  };

  useEffect(() => {}, [chat]);

  return (
    <div className="flex justify-between">
        {/* start */}
      <div>
        {!isToggle && (
          <div id="profile" className=" bg-[black] flex">
            {!isOpenWallet ? (
              <div>
                <NewProfile
                  toggle={toggleClick}
                  doubleClick={doubleClick}
                  wallet={openWallet}
                />
              </div>
            ) : (
              <div>
                {wallet}
                {isExchange && (
                  <Exchange
                    exchange={changeExchange}
                    toggleWallet={openWallet}
                  />
                )}
                {isUpload && (
                  <SendTokens upload={changeUpload} toggleWallet={openWallet} />
                )}
                {isPool && (
                  <Pools pool={changePool} toggleWallet={openWallet} />
                )}
                {isLiquidity && (
                  <AddLiquidity
                    liquidity={changeLiquidity}
                    toggleWallet={openWallet}
                  />
                )}
                {isRecieved && (
                  <RecieveToken
                    recieved={changeRecieve}
                    toggleWallet={openWallet}
                  />
                )}
              </div>
            )}
          </div>
        )}
        {isToggle && <Collapse toggle={toggleClick} Toggle={isToggle} />}
      </div>
    {/* end */}



      <div className="w-full h-screen bg-black p-6 flow"></div>

      {!chat.collapsed && (
        <div
          className="w-[39%] h-[94vh] ml-[20px]"
          style={{
            width: chat.minimized ? "19.5%" : flow.collapsed ? "75%" : "",
            marginLeft: chat.minimized ? "5%" : "",
          }}
        >
          <Chat />
        </div>
      )}

      {!flow.collapsed && (
        <div
          className=" w-[39%] h-[94vh] overflow-y-scroll"
          style={{
            width:
              chat.minimized && !space.collapsed
                ? "55%"
                : chat.collapsed && !space.collapsed
                ? "75%"
                : space.collapsed && chat.minimized
                ? "73%"
                : space.collapsed && chat.default
                ? "58%"
                : space.collapsed && chat.collapsed
                ? "95%"
                : "",
            padding: space.collapsed && chat.collapsed ? "0% 10%" : "",
            marginLeft: chat.collapsed ? "5%" : "",
          }}
        >
          <FlowFeeds />
        </div>
      )}

      {!space.collapsed && (
        <div className="w-[18%] h-[94vh]">
          <Space />
        </div>
      )}
    </div>
    // </div>
  );
};

export default Flow;
