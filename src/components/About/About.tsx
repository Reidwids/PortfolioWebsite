// @ts-nocheck
import { faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';

export default function About() {
	const [letterClass, setletterClass] = useState('text-animate');
	useEffect(() => {
		(async () => {
			return setTimeout(() => {
				setletterClass('text-animate-hover');
			}, 3000);
		})();
	}, []);
	return (
		<>
			<div className="center-container">
				<div className="container about-page">
					<div className="text-zone">
						<h1>
							<AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} letterClass={letterClass}></AnimatedLetters>
						</h1>
						<p>I am a dedicated web developer looking for an opportunity to apply my strong work ethic and critical thinking skills to a compelling project.</p>
						<p>
							I have had a passion for technology for as long as I can remember. My background is in Science and Engineering, though I veered from STEM for some time to pursue my love of cooking. After travelling the world and working in some of the
							world's best restaurants, I have returned to the industry with fire in my eyes - ready for any challenge that is put into my path
						</p>
						<p>If I had to define myself in a few words, it would be that I am passionate, hard-working, a team-player, a fintech finatic, and a wicked chef! </p>
					</div>
					<div className="stage-cube-cont">
						<div className="cubespinner">
							<div className="face1">
								<FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
							</div>
							<div className="face2">
								<FontAwesomeIcon icon={faNodeJs} color="#44883e"></FontAwesomeIcon>
							</div>
							<div className="face3">
								<FontAwesomeIcon icon={faGitAlt} color="#646464"></FontAwesomeIcon>
							</div>
							<div className="face4">
								<FontAwesomeIcon icon={faJsSquare} color="#EC4"></FontAwesomeIcon>
							</div>
							<div className="face5">
								<FontAwesomeIcon icon={faDatabase} color="#3FA037"></FontAwesomeIcon>
							</div>
							<div className="face6">
								<FontAwesomeIcon icon={faPython} color="#336791"></FontAwesomeIcon>
							</div>
						</div>
					</div>
				</div>
				<Loader type="ball-scale-ripple"></Loader>
			</div>
		</>
	);
}
