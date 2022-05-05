import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';

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
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters letterClass={letterClass} idx={15} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}></AnimatedLetters>
					</h1>
					<p>
						I am open to any employment opportunities, especially in fintech or web-development. However, if you have any other requests or questions, please don't hesitate to contact me! Submit the form below and I will respond as soon as possible.
					</p>
					<div className="contact-form">
						<form>
							<ul>
								<li className="half">
									<input type="text" name="name" placeholder="Name" required></input>
								</li>
								<li className="half">
									<input type="email" name="email" placeholder="Email" required></input>
								</li>
								<li>
									<input type="text" name="subject" placeholder="Subject" required></input>
								</li>
								<li>
									<textarea name="message" placeholder="Message" required></textarea>
								</li>
								<li className="button-align">
									<input type="submit" className="flat-button" value="SEND" />
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
			<Loader type="ball-scale-ripple"></Loader>
		</>
	);
}
