import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logotype.svg"

// content
const content = {
  navbar:  {
    text: "Tutorial",
    logo: "../images/logotype.svg",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  section1:
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  }
}

// markup
const IndexPage = () => {
  return (
    <main className="font-circular">

      <nav className="flex items-center justify-between px-20 my-6">
        <StaticImage className="" alt="Vigorant Logo" src="../images/logotype.svg" layout="fixed" height={40} />
        <div className="flex items-center space-x-2"> 
          <span className="text-[#697492] text-xl "> Got a question? Just call us at +1 833 641 2200 </span>
          <button className="bg-[#4975E9] text-white text-base px-[26px] py-[13px] rounded-md "> Get free consultation </button>
        </div>
      </nav>
      
      
      <title>Vigorant</title>
      <h1>Welcome to Vigorant!</h1>
      <p className="text-xl">
        Edit <code>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>

    </main>
  )
}

export default IndexPage
