import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

export default function Contact() {
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
			<div className="container contact=page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters letterClass={letterClass} idx={15} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}></AnimatedLetters>
					</h1>
				</div>
			</div>
			<Loader type="ball-scale-ripple"></Loader>
		</>
	);
}
