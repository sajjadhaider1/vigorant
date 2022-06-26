import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const Header = () => {
  return (
      <nav className="flex items-center justify-between py-[14px] px-[150px] w-full h-24  sticky top-0">

        <div className="flex items-end gap-2">
          <StaticImage alt="Vigorant Logo" src="../images/logo.svg" layout="fixed"/>
          <span className="text-[21.25px] font-[700] tracking-wide leading-[26px] font-montserrat">VIGORANT</span>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-[#697492] text-xl font-[450] tracking-wide ">
            {" "}
            Got a question? Just call us at +1 833 641 2200{" "}
          </span>
          <button className="bg-[#4975E9] text-white text-base px-[26px] py-[13px] rounded-md ">
            {" "}
            Get free consultation{" "}
          </button>
        </div>

      </nav>
  );
};

export default Header;
