import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Projects.scss";
import PunySwapImg from "../../assets/images/PunySwapLogo.svg";
import StocksBoxImg from "../../assets/images/StockboxSVG.svg";
import BattleshipImg from "../../assets/images/BattleshipScreenshot2.png";
import StayPutImg from "../../assets/images/stayPut.png";
import proteusLogo from "../../assets/images/proteusLogo.png";
import AltbToken from "../../assets/images/AltbToken.webp";
import tomsFlowers from "../../assets/images/tomsFlowers.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { DayhoffLogo } from "../../assets/images/dayhoffLogo";

export default function Projects() {
  const [letterClass, setletterClass] = useState("text-animate");
  useEffect(() => {
    (async () => {
      return setTimeout(() => {
        setletterClass("text-animate-hover");
      }, 3000);
    })();
  }, []);
  return (
    <div className="center-container">
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
              letterClass={letterClass}
            ></AnimatedLetters>
          </h1>
          <p>
            I love project based work and am always looking for opportunities to
            apply my skillset while learning something new.
          </p>
          <p>
            These are some of my favorite projects. Please click though to see
            the deployed product - and if you'd like to see the code, my github
            is linked on the nav-bar!
          </p>
          <p>
            Note that this website itself is a project of mine, and was built
            from scratch using React! The code is also located on my github.
          </p>
        </div>
        <div id="projects-container">
          <div
            className="projects-blurb"
            style={{
              marginBottom: "8px",
              fontSize: "15px",
              fontStyle: "italic",
            }}
          >
            ← Drag me! →
          </div>
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={1}
            spaceBetween={-40}
            coverflowEffect={{
              rotate: -40,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://github.com/Reidwids/Stay-Put" target="blank">
                  <img src={StayPutImg} className="webpageImg" />
                  <p>
                    <span style={{ fontWeight: 600 }}>Stay / Put</span> lets
                    renters and buyers quickly connect with realtors to discuss
                    properties for rent/sale! Developed with
                    Python/Django/PostgreSQL/AWS.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://proteusdev.com/" target="blank">
                  <img src={proteusLogo} id="psImg" />

                  <p>
                    <span style={{ fontWeight: 600 }}>Proteus </span> is a
                    Toronto based SaaS company. I helped design and build their
                    landing website using Next.js, React, and TailwindCSS.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://www.toms-flowers.com/" target="blank">
                  <img src={tomsFlowers} id={"psImg"} />
                  <p>
                    <span style={{ fontWeight: 600 }}>Toms Flowers </span> is a
                    local flower shop close to my apartment in Toronto. Growing
                    plants is a hobby of mine, and I was happy to help them
                    build a website to help them grow their business. I built
                    the website using React, SASS, framer-motion, and the google
                    maps API.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://app.dayhoff.ai/" target="blank">
                  <DayhoffLogo id="psImg" />
                  <p>
                    <span style={{ fontWeight: 600 }}>Dayhoff </span> is a
                    bioinformatic analysis tool. I helped design and build the
                    full-stack app using Nest.js, React, PostgreSQL, Docker, and
                    the AWS cloud suite.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://altbase.com/" target="blank">
                  <img src={AltbToken} id="psImg" />
                  <p>
                    <span style={{ fontWeight: 600 }}>Altbase </span> is a
                    crypto market research & investment platform. I built both
                    the full-stack mobile and webapp app using Nest.js and
                    React, and worked with web3 and solidity to build and
                    interact with smart contracts.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://github.com/Reidwids/PunySwapBE" target="blank">
                  <img src={PunySwapImg} id="psImg" />

                  <p>
                    <span style={{ fontWeight: 600 }}>Puny-Swap</span> is a
                    UniSwap clone, providing sending and swapping services for
                    crypto-currency. This project uses the full MERN stack,
                    Solidity, Moralis, and RESTful APIs.
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://reidwids.github.io/Battleship/" target="blank">
                  <img src={BattleshipImg} className="webpageImg" />
                  <p>
                    <span style={{ fontWeight: 600 }}>Battleship!</span> is a
                    single player game where you fight on the open ocean to sink
                    your opponents fleet of warships. Just make sure you sink
                    theirs before they sink yours!
                  </p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <a href="https://github.com/Reidwids/StocksBox" target="blank">
                  <img src={StocksBoxImg} id="sbImg" />
                  <p>
                    <span style={{ fontWeight: 600 }}>StockBox</span> lets you
                    build a profile and face off against your friends to see who
                    can build the best investment portfolio! This app was built
                    with NodeJS, Express, MongoDB, and Bootstrap5.
                  </p>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="projects-blurb" style={{ marginTop: "10px" }}>
            Click a card to visit the project!
          </div>
        </div>
        <Loader active={true} type="ball-scale-ripple"></Loader>
      </div>
    </div>
  );
}
