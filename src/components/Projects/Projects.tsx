//// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Projects.scss';
import PunySwapImg from '../../assets/images/PunySwapLogo.svg';
import StocksBoxImg from '../../assets/images/StockboxSVG.svg';
import BattleshipImg from '../../assets/images/BattleshipScreenshot2.png';
import StayPutImg from '../../assets/images/stayPut.png';

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
				<div id="projects">
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
				</div>
			</div>
			<Loader type="ball-scale-ripple"></Loader>
		</div>
	);
}
