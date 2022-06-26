import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";

// markup
const IndexPage = () => {
  return (
    <main className="font-circular leading-[30px]">

      <title>Vigorant</title>

      <Header />

      <section className="my-6">
        <div className="mx-[66px] rounded-[100px] bg-[#E9F0FF] h-[632px]">
          <StaticImage className="absolute right-0" src="../images/heroright.png" />
        </div>

      </section>

    </main>
  );
};

export default IndexPage;
