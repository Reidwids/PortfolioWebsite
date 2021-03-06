// @ts-nocheck
import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup, useMap, icon } from 'react-leaflet';
// import Swal from 'sweetalert2';

import iconUrl from '../../assets/images/marker-icon-2x.png';
import shadowUrl from '../../assets/images/marker-shadow.png';
import L from 'leaflet';
let myIcon = L.icon({
	iconUrl: iconUrl,
	iconSize: [35, 60],
	iconAnchor: [20, 60],
	popupAnchor: [-3, -76],
	shadowUrl: shadowUrl,
	shadowSize: [68, 95],
	shadowAnchor: [22, 94],
});

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
				alert('Your message was successfully sent!');

				// Swal.fire({
				// 	icon: 'success',
				// 	title: 'Success',
				// 	text: 'Your message was successfully sent!',
				// });
			})
			.catch((error) => {
				console.log(error);
				// Swal.fire({
				// 	icon: 'error',
				// 	title: 'Oops...',
				// 	text: 'Failed to send message!',
				// });
				alert('Oops...Message failed to send!');
			});
	};
	return (
		<>
			<div className="center-container">
				<div className="container contact-page">
					<div className="text-zone">
						<div className="contact-page-text">
							<h1>
								<AnimatedLetters letterClass={letterClass} idx={15} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}></AnimatedLetters>
							</h1>
							<p>
								I am open to any employment opportunities, especially in fintech or web-development. However, if you have any other requests or questions, please don't hesitate to contact me! Submit the form below and I will respond as soon as
								possible.
							</p>
						</div>
						<div className="contact-form">
							<form ref={refForm} onSubmit={sendEmail}>
								<ul>
									<div>
										<li className="half">
											<input type="text" name="from_name" placeholder="Name" required></input>
										</li>
										<li className="half">
											<input type="email" name="from_email" placeholder="Email" required></input>
										</li>
									</div>
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
					<div id="map">
						<MapContainer style={{ height: '100%', width: '100%' }} center={[43.69912, -79.435707]} zoom={12} scrollWheelZoom={true}>
							<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
							<Marker position={[43.69912, -79.435707]} icon={myIcon}>
								<Popup>
									<div style={{ fontSize: '12px' }}>
										Eglinton Avenue West,<br></br> Toronto, Ontario
									</div>
								</Popup>
							</Marker>
						</MapContainer>
					</div>
				</div>
				<Loader type="ball-scale-ripple"></Loader>
			</div>
		</>
	);
}
