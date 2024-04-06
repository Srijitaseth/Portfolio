import React from "react";
import "./about.scss";
import { FaAward, FaTelegramPlane } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsClipboardCheck } from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faNode,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
	return (
		<section id="about">
			<h5 data-aos="fade-up" data-aos-anchor="#about" data-aos-duration="900">
				Unlock the mysteries of me
			</h5>
			<h2 data-aos="fade-up" data-aos-anchor="#about" data-aos-duration="700">
				About me
			</h2>

			<div className="container about__container">
				<div
					className="stage-cube-cont"
					data-aos="fade-right"
					data-aos-anchor=".about__container"
					data-aos-duration="500"
				>
					<div className="cubespinner">
						<div className="face1">
							<FontAwesomeIcon icon={faNode} color="#3C873A" />
						</div>
						<div className="face2">
							<FontAwesomeIcon icon={faHtml5} color="#F06529" />
						</div>
						<div className="face3">
							<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
						</div>
						<div className="face4">
							<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
						</div>
						<div className="face5">
							<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
						</div>
						<div className="face6">
							<FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
						</div>
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						{/* Experience  */}
						<article
							className="about__card"
							data-aos="fade-left"
							data-aos-anchor=".about__cards"
							data-aos-duration="500"
						>
							<img src={require("../../assets/passport.jpg")} />
						</article>

						<article
							className="about__card"
							data-aos="fade-left"
							data-aos-anchor=".about__cards"
							data-aos-duration="900"
						>
							<BsClipboardCheck className="about__icon" />
							<h5>Education</h5>
							<small>B.Tech CSE from SRM</small>
						</article>
					</div>

					<p
						data-aos="fade-up"
						data-aos-anchor=".about__content"
						data-aos-duration="1000"
					>
						Hello There, I'm Srijita Seth.
						<br />
						As a UI/UX Developer, I bring a unique blend of technical
						proficiency and creative flair to create intuitive and visually
						appealing user interfaces. My expertise lies in designing
						user-centric web solutions that prioritize ease of use, aesthetic
						appeal, and responsive design. I am enthusiastic about collaborating
						on projects that challenge my skills and working alongside
						individuals who share a passion for innovative and user-friendly
						design. Let's join forces to develop web applications that not only
						look great but also provide an exceptional user experience.
					</p>

					<a
						href="#contact"
						className="btn btn-primary"
						data-aos="fade-up"
						data-aos-anchor=".about__content"
						data-aos-duration="1200"
					>
						Let's chat <FaTelegramPlane />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
