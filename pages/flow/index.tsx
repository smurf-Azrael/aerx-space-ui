import React, { useEffect, useState } from "react"
import Chat from "../../components/Chat"
import CollapsingSidebar from "../../components/CollapsingSidebar"
import FlowFeeds from "../../components/Flow"
import Space from "../../components/Space"
import {
  expandChat,
  expandFlow,
  expandSpace,
  selectModules,
} from "../../store/slices/modulesSlices"
import { useDispatch, useSelector } from "../../store/store"
import Index from "../../components/Profiles/index"
import { Box } from "@chakra-ui/react"

const Flow: React.FC = () => {
  const dispatch = useDispatch()
  const { flow, chat, space, sidebar } = useSelector(selectModules)
  const [flowWidth, setFlowWidth] = useState<string>()
  const handleChatClicked = () => {
    dispatch(expandChat())
  }
  const handleFlowClicked = () => {
    dispatch(expandFlow())
  }
  const handleSpaceClicked = () => {
    dispatch(expandSpace())
  }

  useEffect(() => {}, [chat])

  return (
    <div className="w-full h-screen bg-black p-6 flow  ">
      <div className="flex justify-between">
        <Box top="0" left="0" position="absolute" zIndex="6">
          <Index />
        </Box>
        {!sidebar.collapsed && <div className="w-[15%]"></div>}
        {!chat.collapsed && (
          <div
            className="w-[39%] h-[94vh] ml-[20px] ]"
            style={{
              width: chat.minimized || !sidebar.collapsed ? "19.5%" : "",
              // marginLeft: chat.minimized ? "5%" : "",
            }}
          >
            <Chat />
          </div>
        )}

        {chat.collapsed && <div className="w-[39%]"></div>}

        {!flow.collapsed && (
          <div className=" w-[508.72px] px-2.5 h-[94vh] bg-black-dark     rounded-[13.7px] ">
            <div className=" w-[495.72px] h-[94vh] overflow-y-scroll rounded-[13.7px]  ">
              <FlowFeeds />
            </div>
          </div>
        )}

        {!space.collapsed && (
          <div className="w-[15%] h-[94vh]">{/* <Space /> */}</div>
        )}
      </div>
    </div>
  )
}

export default Flow
