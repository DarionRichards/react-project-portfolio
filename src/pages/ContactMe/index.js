import Media from "react-media";
import {ContactForm} from "../../components/ContactMeForm";
import {NavContact} from "../../components/NavContact";
import "./ContactMe.css";

import locationIcon from "../../assets/icons/location.svg";
import emailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import gitHubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import cvIcon from "../../assets/icons/cv.svg";

export const ContactMe = () => {
	return (
		<>
			<header>
				<NavContact />
			</header>
			<main>
				<section className="wrapper">
					<section className="contact-container">
						<div className="contact-me-section">
							<h2>Contact Me</h2>
							<h6>Feel free to contact me at any time.</h6>
							<ContactForm />
						</div>
						<Media
							query="(min-width: 990px)"
							render={() => (
								<div className="social-section">
									<div className="contact-info">
										<div className="contact-info-text">
											<h2>Information</h2>
											<div
												style={{display: "inline-flex", alignItems: "center"}}
											>
												<img
													className="contact-link-icon"
													src={locationIcon}
													alt="github-icon"
												/>
												<p>Birmingham, UK</p>
											</div>
											<div
												style={{
													display: "inline-flex",
													alignItems: "center",
												}}
											>
												<img
													className="contact-link-icon"
													src={emailIcon}
													alt="github-icon"
												/>
												<p>darionrichards@outlook.com</p>
											</div>
											<div
												style={{display: "inline-flex", alignItems: "center"}}
											>
												<img
													className="contact-link-icon"
													src={phoneIcon}
													alt="github-icon"
												/>
												<p>07402 323 872</p>
											</div>
										</div>
									</div>
									<div className="contact-links">
										<a
											href="https://github.com/DarionRichards"
											target="_blank"
											rel="noreferrer"
										>
											<img
												className="contact-link-icon"
												src={gitHubIcon}
												alt="github-icon"
											/>
										</a>
										<a
											href="https://www.linkedin.com/in/darionrichards"
											target="_blank"
											rel="noreferrer"
										>
											<img
												className="contact-link-icon"
												src={linkedinIcon}
												alt="linkedin-icon"
											/>
										</a>
										<a
											href="https://docs.google.com/document/d/1JayiuboL3Ie47uJichXcj69pYMMK5ORI/edit?usp=sharing&amp;ouid=103570595265825673215&amp;rtpof=true&amp;sd=true"
											target="_blank"
											rel="noreferrer"
										>
											<img
												className="contact-link-icon"
												src={cvIcon}
												alt="cv-icon"
											/>
										</a>
									</div>
								</div>
							)}
						/>
					</section>
				</section>
			</main>
		</>
	);
};
