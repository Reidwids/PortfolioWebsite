import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Contact() {
	const [letterClass, setletterClass] = useState('text-animate');
	const refForm = useRef();
	emailjs.init('9e7vrFRXJ25mwMVpI');
	useEffect(() => {
		(async () => {
			return setTimeout(() => {
				setletterClass('text-animate-hover');
			}, 3000);
		})();
	}, []);

	const sendEmail = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm('service_bvzc5cj', 'template_fze7f85', refForm.current)
			.then(() => {
				alert('Message Sent');
				// window.location.reload(false);
			})
			.catch((error) => {
				console.log(error);
				alert('Failed to send message');
			});
	};

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
						<form ref={refForm} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input type="text" name="from_name" placeholder="Name" required></input>
								</li>
								<li className="half">
									<input type="email" name="from_email" placeholder="Email" required></input>
								</li>
								<li>
									<input type="text" name="from_subject" placeholder="Subject" required></input>
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
				<div className="info-map">
					Derek Reid-Wilkinson,
					<br></br>
					Canada,
					<br></br>
					1951 Eglinton Avenue West,
					<br></br>
					York,
					<br></br>
					Ontario
					<br></br>
					<span>reidwids@gmail.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[44.96366, 19.61045]} zoom={13}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
						<Marker position={[44.96366, 19.61045]}>
							<Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader type="ball-scale-ripple"></Loader>
		</>
	);
}
