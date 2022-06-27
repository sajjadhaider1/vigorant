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
          Increase your appearing <br /> at the top of the major search engines
        </div>
        <div className="text-[#697492] font-medium text-xl w-3/4">
          The stats are in our favour. Vigorant doesn't just help you with your
          marketing, we get you customer relationships that last.
        </div>
        <div className="flex bg-[#EBF6ED] justify-between w-4/5 rounded-3xl border border-[#6F8273] py-10 px-20">
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+153%</div>
            <div className="text-[#6F8273] font-semibold text-base">
              Increased <br /> Brand Awareness
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+98%</div>
            <div className="text-[#6F8273] font-semibold text-base">
              Increased <br /> Web Visitors
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[#163F1D] font-bold text-5xl ">+175%</div>
            <div className="text-[#6F8273] font-semibold text-base">
              Increased <br /> Conversion Rates
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-10 mx-[-66px] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
            <path
              fill="#E9F0FF"
              fill-opacity="1"
              d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,69.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>

          <div className="text-center bg-[#E9F0FF] px-[151px] ">
            <div className="text-5xl font-semibold">
              Get the best strategie right just for you!
            </div>

            <div className="flex mt-20">
              <div className="hidden lg:flex lg:w-1/2">
                <StaticImage
                  src="../images/revenue.png"
                  alt="Increase revenue!"
                  layout="constrained"
                />
              </div>

              <div className="w-full px-6 space-y-2 lg:w-1/2">
                <div className="flex items-center gap-6">
                  <StaticImage src="../images/greentick.svg" layout="fixed" />
                  <div className="text-[28px] font-semibold">
                    01. Campaign Action Plan
                  </div>
                </div>

                <div className="pb-4 text-xl font-medium text-left text-[#697492]">
                  Identify your company's needs and align them with your goals,
                  allowing us to take the next step forward.
                </div>

                <div className="flex items-center gap-6">
                  <StaticImage src="../images/greentick.svg" layout="fixed" />
                  <div className="text-[28px] font-semibold">
                    02. Custom Campaign Creation
                  </div>
                </div>

                <div className="pb-4 text-xl font-medium text-left text-[#697492]">
                  Your SEO campaigns will be built from the ground up to meet
                  the needs of your business, customers, and goals.
                </div>

                <div className="flex items-center gap-6">
                  <StaticImage src="../images/greentick.svg" layout="fixed" />
                  <div className="text-[28px] font-semibold">
                    03. Launch, Optimize {`&`} Scale
                  </div>
                </div>

                <div className="pb-4 text-xl font-medium text-left text-[#697492]">
                  High-quality content on a regular basis, scale your campaign,
                  and take your brand to the next level!
                </div>

                <div className="flex gap-4 pt-6 pb-20">
                  <button className="px-5 py-3 font-semibold text-white bg-[#4975E9] rounded-md">
                    See Plans
                  </button>
                  <button className="px-5 py-3 font-semibold text-[#4975E9] border border-[#4975E9] rounded-md ">
                    Get free consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-20 my-20">
        <div className="grid grid-cols-5 rounded-3xl bg-gradient-to-br from-[#fcf8b4] to-orange-400 py-10">
          <div className="flex justify-center col-span-2">
            <StaticImage className="" src="../images/sitetraffic.png" />
          </div>
          <div className="flex flex-col justify-center col-span-3 gap-6 pr-24">
            <div className="text-5xl font-semibold text-[#12141D]">
              We gather high-ranking keywords used by your target audience
            </div>
            <div className="text-xl font-medium text-[#12141D]">
              We keep our customers informed in real-time about what is
              important to them. We communicate clearly, because in the world of
              marketing, honesty wins!
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9F0FF] mx-[-66px] py-10 space-y-4">
        <div className="flex flex-col items-center gap-2 my-10">
          <div className="text-5xl font-semibold text-[#050238]">
            Plans which turn your business to the new level
          </div>
          <div className="text-xl text-[#697492] font-semibold">
            We've made the best plans right just for you
          </div>
        </div>

        <div className="flex justify-around gap-6 ">

          <div className="grow" />
          
          <div className="px-6 py-4 bg-white rounded-lg ">

            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold">Basic</p>
              <div className="bg-green-100 text-[#28C76F] font-bold rounded-md px-1 py-1 text-center">Save 50%</div>
            </div>


            <h4 className="mt-2 text-4xl font-semibold">
            <p className="text-lg line-through text-slate-300">$10</p>
              $5 <span className="text-base font-normal text-slate-450">/ Month</span>
            </h4>
            <p className="mt-4 text-slate-500">Beautifully simple project planning</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium ">24/7 Support</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Instant Backup</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Instant Backup</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

            </div>

            <button className="w-full px-4 py-2 mt-10 text-[#4975E9] border border-[#4975E9] font-semibold tracking-wide capitalize rounded-md">
              Get 50% off premium plan
            </button>
          </div>


          <div className="px-6 py-4 bg-white rounded-lg ">
          <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold">Premium</p>
              <div className="bg-green-100 text-[#28C76F] font-bold rounded-md px-1 py-1 text-center">Save 50%</div>
            </div>
            <h4 className="mt-2 text-4xl font-semibold">
            <p className="text-lg line-through text-slate-300">$20</p>
              $10 <span className="text-base font-normal text-slate-500">/ Month</span>
            </h4>
            <p className="mt-4 text-slate-500">Beautifully simple project planning</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium ">24/7 Support</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Instant Backup</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">10 GB Storage</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-slate-200"
                  viewBox="0 0 20 20"
                  >
                  <path d="M8.41 7L12.71 2.71C12.8983 2.5217 13.0041 2.2663 13.0041 2C13.0041 1.7337 12.8983 1.47831 12.71 1.29C12.5217 1.1017 12.2663 0.995911 12 0.995911C11.7337 0.995911 11.4783 1.1017 11.29 1.29L7 5.59L2.71 1.29C2.5217 1.1017 2.2663 0.995911 2 0.995911C1.7337 0.995911 1.4783 1.1017 1.29 1.29C1.1017 1.47831 0.995908 1.7337 0.995908 2C0.995908 2.2663 1.1017 2.5217 1.29 2.71L5.59 7L1.29 11.29C1.19627 11.383 1.12188 11.4936 1.07111 11.6154C1.02034 11.7373 0.994202 11.868 0.994202 12C0.994202 12.132 1.02034 12.2627 1.07111 12.3846C1.12188 12.5064 1.19627 12.617 1.29 12.71C1.38296 12.8037 1.49356 12.8781 1.61542 12.9289C1.73728 12.9797 1.86799 13.0058 2 13.0058C2.13201 13.0058 2.26272 12.9797 2.38458 12.9289C2.50644 12.8781 2.61704 12.8037 2.71 12.71L7 8.41L11.29 12.71C11.383 12.8037 11.4936 12.8781 11.6154 12.9289C11.7373 12.9797 11.868 13.0058 12 13.0058C12.132 13.0058 12.2627 12.9797 12.3846 12.9289C12.5064 12.8781 12.617 12.8037 12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.41 7Z"/>
                </svg>

                <span className="mx-4 font-medium text-slate-200">Unlimited Bandwith</span>
              </div>

            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-700">
              Get 50% off premium plan
            </button>
          </div>


          <div className="px-6 py-4 bg-white rounded-lg ">

            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-semibold">Business</p>
              <div className="bg-green-100 text-[#28C76F] font-bold rounded-md px-1 py-1 text-center">Save 50%</div>
            </div>

            <h4 className="mt-2 text-4xl font-semibold">
              <p className="text-lg line-through text-slate-300">$50</p>
              $100 <span className="text-base font-normal text-slate5400">/ Month</span>
            </h4>
            <p className="mt-4 text-slate-500">Beautifully simple project planning</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium ">24/7 Support</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Instant Backup</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">10 GB Storage</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Unlimited Bandwith</span>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="mx-4 font-medium">Unlimited Bandwith</span>
              </div>

            </div>

            <button className="w-full px-4 py-2 mt-10 text-[#4975E9] border border-[#4975E9] font-semibold tracking-wide capitalize rounded-md">
              Get 50% off premium plan
            </button>
          </div>

          <div className="grow" />



        </div>
      </section>



    </main>
  );
};

export default IndexPage;
