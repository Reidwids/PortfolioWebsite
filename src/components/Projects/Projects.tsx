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
					centeredSlides={true}
					slidesPerView={2}
					initialSlide={1}
					spaceBetween={-30}
					coverflowEffect={{
						rotate: -30,
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
							<a href="https://stay-put.herokuapp.com/" target="blank">
								<img src={StayPutImg} className="webpageImg" />
								<p>Stay / Put lets renters and buyers quickly connect with realtors to discuss properties for rent/sale! Developed with Python/Django/PostgreSQL/AWS.</p>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<a href="https://puny-swap-final.herokuapp.com/" target="blank">
								<img src={PunySwapImg} id="psImg" />

								<p>Puny-Swap is a UniSwap clone, providing sending and swapping services for crypto-currency. This project uses the full MERN stack, Solidity, Moralis, and RESTful APIs.</p>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<a href="https://reidwids.github.io/Battleship/" target="blank">
								<img src={BattleshipImg} className="webpageImg" />
								<p>Battleship! is a single player game where you fight on the open ocean to sink your opponents fleet of warships. Just make sure you sink theirs before they sink yours!</p>
							</a>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="swiper-content">
							<a href="https://stockbox1.herokuapp.com/" target="blank">
								<img src={StocksBoxImg} id="sbImg" />
								<p>StockBox lets you build a profile and face off against your friends to see who can build the best investment portfolio! This app was built with NodeJS, Express, MongoDB, and Bootstrap5.</p>
							</a>
						</div>
					</SwiperSlide>
				</Swiper>
				<div id="projects-blurb">Click a card to visit the project!</div>
			</div>
			<Loader active={true} type="ball-scale-ripple"></Loader>
		</div>
	);
}
