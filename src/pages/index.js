import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import Hero from "../components/hero";

const IndexPage = () => {
  return (
    <main className="mx-[66px] ">

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

      <section>

        <div className="mt-10 mx-[-66px] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140"><path fill="#E9F0FF" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,69.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>


          <div className="text-center bg-[#E9F0FF]">
            <div className="text-5xl font-semibold">Get the best strategie right just for you!</div>
            <div className="flex my-20">
              <div className="w-1/2">
                <StaticImage src="../images/revenue.png" alt="Increase revenue!" />
              </div>
              <div className="w-1/2"></div>
            </div>

          </div>

        </div>

      </section>


    </main>
  );
};

export default IndexPage;
