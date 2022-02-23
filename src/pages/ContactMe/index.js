import Media from "react-media";
import {ContactForm} from "../../components/ContactMeForm";
import Nav from "../../components/Nav";
import "./ContactMe.css";

export const ContactMe = () => {
	return (
		<>
			<header>
				<Nav />
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
													src="./assets/images/icons/location.svg"
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
													src="./assets/images/icons/email.svg"
													alt="github-icon"
												/>
												<p>darionrichards@outlook.com</p>
											</div>
											<div
												style={{display: "inline-flex", alignItems: "center"}}
											>
												<img
													className="contact-link-icon"
													src="./assets/images/icons/phone.svg"
													alt="github-icon"
												/>
												<p>07402 323 872</p>
											</div>
										</div>
									</div>
									<div className="contact-links">
										<img
											className="contact-link-icon"
											src="./assets/images/icons/github.svg"
											alt="github-icon"
										/>
										<img
											className="contact-link-icon"
											src="./assets/images/icons/linkedin-black.svg"
											alt="linkedin-icon"
										/>
										<img
											className="contact-link-icon"
											src="./assets/images/icons/github.svg"
											alt="github-icon"
										/>
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
