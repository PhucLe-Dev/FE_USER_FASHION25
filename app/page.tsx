"use client";
import Hero from "./Components/Hero/Hero";
import Brands from "./Components/Main/Brands";
import ButtonScrollTop from "./Components/Main/buttonScrollTop";
import Cate from "./Components/Main/Cate";
import NewProduct from "./Components/Main/Products";
import VideoMain from "./Components/Main/VideoMain";

export default function Home() {
  return (
    <div>
      <div id="hero-section">
        <Hero />
      </div>
      <Cate />
      <VideoMain />
      <NewProduct />
      <Brands />
      <div>
        <ButtonScrollTop/>
      </div>
    </div>
  );
}