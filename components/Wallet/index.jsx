import React from "react";
import RealWallet from "./RealWallet.jsx";
import Wallet from "./Wallet.jsx";
import Collapse from "../Profiles/Collapse"

function index() {
    const [isToggle, setToggle] = React.useState(false);
  

    const toggleClick = () => {
        setToggle((prevState) => !prevState);
      // change toggle state
      }
  return (
    <div h="100vh"  bgColor="black">
      <Collapse toggle={toggleClick} Toggle={isToggle} />
      {isToggle && (
        <div>
          {/* <Wallet />s */}
          <RealWallet />
        </div>
      )}
    </div>
  );
}

export default index;
