// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './Home.scss';
import LogoD from '../../assets/images/D.svg';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

export default function Home() {
	const [letterClass, setletterClass] = useState('text-animate');
	const nameArray = ['e', 'r', 'e', 'k', ','];
	const job1Array = ['W', 'e', 'b'];
	const job2Array = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

	useEffect(() => {
		(async () => {
			return setTimeout(() => {
				setletterClass('text-animate-hover');
			}, 4000);
		})();
	}, []);
	return (
		<>
			<div className="center-container">
				<div className="container home-page">
					<div className="text-zone">
						<h1>
							<span className={`${letterClass} _12`}>H</span>
							<span className={`${letterClass} _13`}>i</span>
							<span className={`${letterClass} _14`}>,</span>
							<br></br>
							<span className={`${letterClass} _15`}>I</span>
							<span className={`${letterClass} _16`}>'</span>
							<span className={`${letterClass} _17`}>m</span>
							<img src={LogoD} alt="developer"></img>
							<AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18}></AnimatedLetters>
							<br></br>
							<AnimatedLetters letterClass={letterClass} strArray={job1Array} idx={23}></AnimatedLetters>&nbsp;
							<AnimatedLetters letterClass={letterClass} strArray={job2Array} idx={26}></AnimatedLetters>
						</h1>
						<h2>Full-Stack Web Developer / MERN Stack / Django+Python</h2>
						<Link to="/contact" className="flat-button">
							CONTACT ME
						</Link>
					</div>
					<Logo></Logo>
				</div>
				<Loader classNametype="ball-scale-ripple"></Loader>
			</div>
		</>
	);
}
