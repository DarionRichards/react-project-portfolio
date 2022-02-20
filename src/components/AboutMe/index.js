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
									<i className="fab fa-html5 gradient"></i>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={1000}
								>
									<i className="fab fa-css3-alt"></i>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={1750}
								>
									<i className="fab fa-js"></i>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={2500}
								>
									<i className="fab fa-node"></i>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateOnce={true}
									animateIn="animate__bounceInRight"
									delay={3250}
								>
									<i className="fab fa-react"></i>
								</AnimationOnScroll>
							</div>
							<div className="profile-card-links">
								<a href="https://github.com/DarionRichards">
									<i className="fab fa-github"></i>
								</a>
								<a href="https://www.linkedin.com/in/darionrichards/">
									<i className="fab fa-linkedin"></i>
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
