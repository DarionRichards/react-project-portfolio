import {AnimationOnScroll} from "react-animation-on-scroll";
import "./ProfileCard.css";

export const ProfileCard = () => {
	return (
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
					delay={250}
				>
					<img
						className="profile-card-icon"
						src="./assets/icons/html-5.svg"
						alt="html-icon"
					/>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={500}
				>
					<img
						className="profile-card-icon"
						src="./assets/icons/css-3.svg"
						alt="css-icon"
					/>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={750}
				>
					<img
						className="profile-card-icon"
						src="./assets/icons/javascript.svg"
						alt="javscript-icon"
					/>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={1000}
				>
					<img
						className="profile-card-icon"
						src="./assets/icons/nodejs.svg"
						alt="nodejs-icon"
					/>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={1250}
				>
					<img
						className="profile-card-icon"
						src="./assets/icons/react.svg"
						alt="react-icon"
					/>
				</AnimationOnScroll>
			</div>
			<div className="profile-card-links">
				<a href="https://github.com/DarionRichards">
					<img
						className="profile-card-icon"
						src="./assets/icons/github-blue.svg"
						alt="github-icon"
					/>
				</a>
				<a href="https://www.linkedin.com/in/darionrichards/">
					<img
						className="profile-card-icon"
						src="./assets/icons/linkedin.svg"
						alt="linkedin-icon"
					/>
				</a>
			</div>
		</section>
	);
};
