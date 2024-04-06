import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="footer__container">
			<ul
				className="permalinks"
				data-aos="fade-up"
				data-aos-anchor=".footer__container"
				data-aos-duration="1400"
			>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>

				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div
				className="footer__socials"
				data-aos="fade-up"
				data-aos-anchor=".footer__container"
				data-aos-duration="1600"
			>
				<a href="https://www.linkedin.com/in/srijita-seth-365b9a262/">
					<BsLinkedin />
				</a>
			</div>

			<div
				className="footer__copyright"
				data-aos="fade-up"
				data-aos-anchor=".footer__container"
				data-aos-duration="1800"
			>
				<small>&copy; Srijita Seth. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
