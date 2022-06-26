import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


// markup
const IndexPage = () => {
  return (
    <main className="font-circular">

      <nav className="flex items-center justify-between my-[30px] px-[150px]">
        <StaticImage className="" alt="Vigorant Logo" src="../images/logotype.svg" layout="fixed"  />
        <div className="flex items-center gap-5"> 
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
