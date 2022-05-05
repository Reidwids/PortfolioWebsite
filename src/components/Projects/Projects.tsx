//// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

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
			</div>
			<Loader type="ball-scale-ripple"></Loader>
		</div>
	);
}
