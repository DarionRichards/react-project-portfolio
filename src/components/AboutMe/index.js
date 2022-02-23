import {AnimationOnScroll} from "react-animation-on-scroll";
import Tilt from "react-parallax-tilt";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<>
			<section id="about-me" className="about-me-section wrapper">
				<div>
					<AnimationOnScroll
						animateOnce={true}
						animateIn="animate__lightSpeedInLeft"
						duration={1.8}
					>
						<div className="heading">
							<h1>ABOUT ME</h1>
						</div>
						<AnimationOnScroll
							animateOnce={true}
							animateIn="animate__lightSpeedInLeft"
							duration={1.8}
							delay={1250}
						>
							<p className="about-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
								natus recusandae amet nostrum odit, ut unde non sint, quia sed
								inventore odio, delectus iure! Eligendi vitae fuga blanditiis
								accusamus tempore! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nihil natus recusandae amet nostrum odit, ut
								unde non sint, quia sed inventore odio, delectus iure! Eligendi
								vitae fuga blanditiis accusamus tempore! Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Nihil natus recusandae amet
								nostrum odit, ut unde non sint, quia sed inventore odio,
								delectus iure! Eligendi vitae fuga blanditiis accusamus tempore!
							</p>
						</AnimationOnScroll>
						<AnimationOnScroll
							animateOnce={true}
							animateIn="animate__lightSpeedInLeft"
							duration={1.8}
							delay={2250}
						>
							<p className="about-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
								natus recusandae amet nostrum odit, ut unde non sint, quia sed
								inventore odio, delectus iure! Eligendi vitae fuga blanditiis
								accusamus tempore! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nihil natus recusandae amet nostrum odit, ut
								unde non sint, quia sed inventore odio, delectus iure! Eligendi
								vitae fuga blanditiis accusamus tempore! Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Nihil natus recusandae amet
								nostrum odit, ut unde non sint, quia sed inventore odio,
								delectus iure! Eligendi vitae fuga blanditiis accusamus tempore!
							</p>
						</AnimationOnScroll>
					</AnimationOnScroll>
				</div>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__slideInRight"
					duration={2}
				>
					<Tilt className="tilt-element" perspective={700} scale={1.02}>
						<section className="profile-card inner-tilt-element">
							<div className="centre">
								<img
									className="profile-img"
									src="./assets/images/profile-img.png"
									alt="Projects Author (Darion Richards)"
								/>
								<h2>Darion Richards</h2>
								<div className="profile-status">
									<i className="fas fa-briefcase"></i>
									<h6>Full Stack Developer</h6>
								</div>
								<div className="profile-location">
									<i className="fas fa-map-marker-alt"></i>
									<h6>Birmingham, UK</h6>
								</div>
							</div>
							<div className="profile-card-skills centre">
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
								>
									<img
										className="profile-card-icon"
										src="./assets/images/icons/html-5.svg"
										alt="html-icon"
									/>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={1000}
								>
									<img
										className="profile-card-icon"
										src="./assets/images/icons/css-3.svg"
										alt="css-icon"
									/>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={1750}
								>
									<img
										className="profile-card-icon"
										src="./assets/images/icons/javascript.svg"
										alt="javscript-icon"
									/>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={2500}
								>
									<img
										className="profile-card-icon"
										src="./assets/images/icons/nodejs.svg"
										alt="nodejs-icon"
									/>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={3250}
								>
									<img
										className="profile-card-icon"
										src="./assets/images/icons/react.svg"
										alt="react-icon"
									/>
								</AnimationOnScroll>
							</div>
							<div className="profile-card-links">
								<a href="https://github.com/DarionRichards">
									<img
										className="profile-card-icon"
										src="./assets/images/icons/github-blue.svg"
										alt="github-icon"
									/>
								</a>
								<a href="https://www.linkedin.com/in/darionrichards/">
									<img
										className="profile-card-icon"
										src="./assets/images/icons/linkedin.svg"
										alt="linkedin-icon"
									/>
								</a>
							</div>
						</section>
					</Tilt>
				</AnimationOnScroll>
			</section>
		</>
	);
};

export default AboutMe;
