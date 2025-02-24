import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5
				data-aos="fade-up"
				data-aos-anchor="#experience"
				data-aos-duration="900"
			>
				What are my skills?
			</h5>
			<h2
				data-aos="fade-up"
				data-aos-anchor="#experience"
				data-aos-duration="700"
			>
				My Experience
			</h2>

			<div className="container experience__container">
				<div
					className="experience__frontend"
					data-aos="fade-right"
					data-aos-anchor=".experience__container"
					data-aos-duration="900"
				>
					<h3>Design Skills</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>UI Design</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>UX Design</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Graphic Design</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Information Architecture</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>User Research</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Prototyping and Wireframing</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>

				<div
					className="experence__backend"
					data-aos="fade-left"
					data-aos-anchor=".experience__container"
					data-aos-duration="1200"
				>
					<h3>Development Skills</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML/CSS</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Responsive Design</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Cross-Browser Development</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>Python</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS Preprocessing</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>

						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icon" />
							<div>
								<h4>C++</h4>
								<small className="text-light">Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
