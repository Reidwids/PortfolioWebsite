import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

export default function Skills() {
	const [letterClass, setletterClass] = useState('text-animate');
	useEffect(() => {
		(async () => {
			return setTimeout(() => {
				setletterClass('text-animate-hover');
			}, 3000);
		})();
	}, []);
	$(document).ready(function () {
		$('#myCanvas').tagcanvas({
			textColour: '#FFF',
			outlineThickness: 0.5,
			outlineColour: '#fe0853',
			maxSpeed: 0.06,
			freezeActive: true,
			shuffleTags: true,
			shape: 'sphere',
			zoom: 0.9,
			noSelect: true,
			textFont: null,
			pinchZoom: true,
			freezeDecel: true,
			fadeIn: 3000,
			initial: [0.3, -0.1],
			depth: 0.8,
		});
	});

	return (
		<div className="container skills-page">
			<div className="text-zone">
				<h1>
					<AnimatedLetters strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15} letterClass={letterClass}></AnimatedLetters>
				</h1>
			</div>
			<canvas width="500" height="500" id="myCanvas">
				<ul>
					<li>
						<a>HTML 5</a>
					</li>
					<li>
						<a>CSS 3</a>
					</li>
					<li>
						<a>SASS</a>
					</li>
					<li>
						<a>JavaScript</a>
					</li>
					<li>
						<a>jQuery</a>
					</li>
					<li>
						<a>Bootstrap</a>
					</li>
					<li>
						<a>mySQl</a>
					</li>
					<li>
						<a>MongoDB</a>
					</li>
					<li>
						<a>Git Hub</a>
					</li>
					<li>
						<a>Node JS</a>
					</li>
					<li>
						<a>React</a>
					</li>
					<li>
						<a>Express</a>
					</li>
					<li>
						<a>PostgreSQL</a>
					</li>
					<li>
						<a>Python</a>
					</li>
					<li>
						<a>Django</a>
					</li>
					<li>
						<a>JWTs</a>
					</li>
					<li>
						<a>AWS</a>
					</li>
				</ul>
			</canvas>
			<Loader type="ball-scale-ripple"></Loader>
		</div>
	);
}
