import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="my-6">
      <div className="rounded-[100px] bg-[#E9F0FF] py-8 flex justify-between items-center">
        <div className="bg-[#FF9F43] rounded-full h-[30px] w-[30px] absolute left-12"></div>
        <div className="w-full pr-12 mx-20 space-y-5 lg:w-1/2">
          <div className="text-6xl font-semibold">
            Make your website load faster, optimize your images and boost your
            SEO.
          </div>
          <div className="text-xl font-medium text-[#697492] lg:pr-20">
            Increase the number of visitors to your website by appearing
            organically at the top of the major search engines results pages.
          </div>
          <div className="flex justify-start gap-5 text-base font-medium">
            <button className="px-5 py-3 text-white bg-[#4975E9] rounded-md font-semibold">
              Get 50% off SEO Plan
            </button>
            <button className="px-5 py-3 text-[#4975E9] border border-[#4975E9]  rounded-md font-semibold ">
              Get free consultation
            </button>
          </div>
        </div>
        <StaticImage
          className="right-0 hidden lg:flex"
          src="../images/heroright.png"
          alt="Increase the number of visitors to your website."
          layout="fixed"
        />
      </div>
    </section>
  );
};

export default Hero;
