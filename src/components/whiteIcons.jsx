import React from 'react'
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

function whiteIcons() {
  return (
    <div className="flex flex-row w-[65.44px] justify-between ">
          <a  href='https://x.com/?lang=en'><img
            src={twitter}
           
            alt="Example"
            className="  w-[11.59px] h-[11.59px]  "
          /></a>
          <a href="https://in.linkedin.com/"><img
            src={linkedin}
            alt="Example"
            className="  w-[13.05px] h-[10.6px] "
          /></a>
         <a  href='https://www.facebook.com/'> <img
            src={facebook}
            
            alt="Example"
            className="  w-[6.44px] h-[11.91px] "
          /></a>
        </div>
  )
}

export default whiteIcons