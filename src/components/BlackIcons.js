import React from 'react'
import facebook from "../assets/bfacebook.png";
import twitter from "../assets/btwitter.png";
import linkedin from "../assets/blinkedin.png";

function BlackIcons() {
  return (
    <div className="flex flex-row w-[65.44px] justify-between ">
          <img
            src={twitter}
            alt="Example"
            className="  w-[11.59px] h-[11.59px]  "
          />
          <img
            src={linkedin}
            alt="Example"
            className="  w-[13.05px] h-[10.6px] "
          />
          <img
            src={facebook}
            alt="Example"
            className="  w-[6.44px] h-[11.91px] "
          />
        </div>
  )
}

export default BlackIcons