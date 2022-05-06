//// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Projects.scss';
import PunySwapImg from '../../assets/images/PunySwapLogo.svg';
import StocksBoxImg from '../../assets/images/StockboxSVG.svg';
import BattleshipImg from '../../assets/images/BattleshipScreenshot2.png';
import StayPutImg from '../../assets/images/stayPut.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

export default function Projects() {
	const [letterClass, setletterClass] = useState('text-animate');
	useEffect(() => {
		(async () => {
			return setTimeout(() => {
				setletterClass('text-animate-hover');
			}, 3000);
		})();
	}, []);
	return (
		<div className="container projects-page">
			<div className="text-zone">
				<h1>
					<AnimatedLetters strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} letterClass={letterClass}></AnimatedLetters>
				</h1>
				<p>I love project based work and am always looking for opportunities to apply my skillset while learning something new.</p>
				<p>These are some of my favorite projects. Please click though to see the function of the apps as well as the skills used to build them!</p>
			</div>
			<div id="projects-container">
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<img src={PunySwapImg} />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit numquam impedit iste accusamus repellendus sequi architecto illum enim cupiditate. Accusamus, dolore provident totam maxime quos optio deleniti velit eum.</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<img src={StayPutImg} />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit numquam impedit iste accusamus repellendus sequi architecto illum enim cupiditate. Accusamus, dolore provident totam maxime quos optio deleniti velit eum.</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<img src={BattleshipImg} />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit numquam impedit iste accusamus repellendus sequi architecto illum enim cupiditate. Accusamus, dolore provident totam maxime quos optio deleniti velit eum.</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<img src={StocksBoxImg} />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit numquam impedit iste accusamus repellendus sequi architecto illum enim cupiditate. Accusamus, dolore provident totam maxime quos optio deleniti velit eum.</p>
						</div>
					</SwiperSlide>
				</Swiper>
				{/* <div id="projects">
					<div className="project-block" id="punySwap">
						<a href="https://github.com/Reidwids/PunySwapBE" target={'_blank'}>
							<img src={PunySwapImg} alt="" className="project-image" />
						</a>
					</div>

					<div className="project-block" id="stocksBox">
						<a href="https://github.com/Reidwids/Battleship" target={'_blank'}>
							<img src={StocksBoxImg} alt="" className="stockbox-image" />
						</a>
					</div>
					<div className="project-block" id="battleship">
						<a href="https://github.com/Reidwids/Battleship" target={'_blank'}>
							<img src={BattleshipImg} alt="" className="project-image" />
						</a>
					</div>
					<div className="project-block" id="stayPut">
						<a href="https://github.com/Reidwids/Stay-Put" target={'_blank'}>
							<img src={StayPutImg} alt="" className="project-image" />
						</a>
					</div>
				</div> */}
			</div>
			<Loader active={true} type="ball-scale-ripple"></Loader>
		</div>
	);
}
