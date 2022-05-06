// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Skills.scss';

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
			maxSpeed: 0.05,
			freezeActive: true,
			shuffleTags: true,
			shape: 'sphere',
			zoom: 1,
			noSelect: true,
			textFont: 'Helvetica',
			pinchZoom: true,
			freezeDecel: true,
			fadeIn: 3000,
			initial: [0.3, -0.1],
			depth: 0.8,
		});
	});

	return (
		<div className="center-container">
			<div className="container skills-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters strArray={['S', 'k', 'i', 'l', 'l', 's']} idx={15} letterClass={letterClass}></AnimatedLetters>
					</h1>
					<p>My assets lie in my full stack experience paired with strong soft skills such as leadership, attention to detail, quick-learning and thinking, as well as a macro-understanding of business.</p>
					<p>
						My core skillset lies in web development - working in the frontend using <span style={{ color: '#ffd700' }}>React, JavaScript, HTML5, and CSS/CSS libraries, </span> while also in the backend using{' '}
						<span style={{ color: '#ffd700' }}>NodeJS, Express, Python, Django, MongoDB, and PostgreSQL.</span>
					</p>
					<p>I excel in fast-paced environments that strive to deliver excellence. I am continuously pushing myself to get better, and am currently working hard to grow this list even larger!</p>
				</div>
				<div className="canvas-wrapper">
					<canvas width="400" height="400" id="myCanvas">
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
				</div>
			</div>
			<Loader active={true} type="ball-scale-ripple"></Loader>
		</div>
	);
}
