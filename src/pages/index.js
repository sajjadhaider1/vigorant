import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import Hero from "../components/hero";

const IndexPage = () => {
  return (
    <main className="mx-[66px] max-w-[1440px]">

      <title>Vigorant</title>

      <Header />

      <Hero />

      <section className="flex flex-col items-center my-20 space-y-6 text-center">
        <div className="w-3/4 text-5xl font-semibold">
          Increase your appearing <br/> at the top of the major search engines
          </div>
        <div className="text-[#697492] font-medium text-xl w-3/4">The stats are in our favour. Vigorant doesn't just help you with your marketing, we get you customer relationships that last.</div>
        <div className="flex bg-[#EBF6ED] justify-between w-4/5 rounded-3xl border border-[#6F8273] py-10 px-20">
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+153%</div>
            <div className="text-[#6F8273] font-semibold text-base">Increased <br/> Brand Awareness</div>
          </div>
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+98%</div>
            <div className="text-[#6F8273] font-semibold text-base">Increased <br/> Web Visitors</div>
          </div>
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+175%</div>
            <div className="text-[#6F8273] font-semibold text-base">Increased <br/> Conversion Rates</div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default IndexPage;
