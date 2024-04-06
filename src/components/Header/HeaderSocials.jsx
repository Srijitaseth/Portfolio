import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import "aos/dist/aos.css";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				data-aos="fade-down"
				data-aos-duration="1500"
				href="https://www.linkedin.com/in/srijita-seth-365b9a262/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
		</div>
	);
};

export default HeaderSocials;
