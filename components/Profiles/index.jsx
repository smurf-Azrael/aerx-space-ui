import React from 'react'
import ProfileSection from "./ProfileSection"
import {
    Box,
    Container,
    ChakraProvider,
} from "@chakra-ui/react";
import ImagesCarousel from "./ImagesCarousel" 
import Wallets from "./Wallets"
import Notifications from "./Notification"
import NftValues from "./NftValues"
import Collapse from "./Collapse"
import Circle from "./Circle"
import {useState} from 'react'



// type Props = {
// }
// const [toggle,setToggle] = React.useState<boolean>(false)


function index() {
 
  const [isToggle,setToggle] = useState(false)

  const toggleClick = () => {
      setToggle(prevState => !prevState)
      console.log(isToggle)
  
  }
  let left = isToggle  && "388px"
  let hidden = !isToggle && "hidden"

const vh = 45
  return (

        <div 
        style={{height: `${100 % vh}px`}}
        
        >
          <Collapse toggle={toggleClick} isToggle={isToggle} left={left}/>
          {isToggle && 
          <div className={hidden}>
          <ProfileSection hidden={hidden} />
          <Circle />
        <ImagesCarousel />
        <Wallets />
        <NftValues />
        <Notifications />
          </div>
          }

        {/* <ProfileSection /> */}
       

      </div>
        


    


  )
}

export default index