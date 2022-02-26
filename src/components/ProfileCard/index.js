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

			<div className="profile-card-links">
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={250}
				>
					<a
						href="https://github.com/DarionRichards"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="profile-card-icon"
							src="./assets/icons/github-blue.svg"
							alt="github-icon"
						/>
					</a>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={500}
				>
					<a
						href="https://www.linkedin.com/in/darionrichards/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="profile-card-icon"
							src="./assets/icons/linkedin.svg"
							alt="linkedin-icon"
						/>
					</a>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__bounceInRight"
					delay={750}
				>
					<a
						href="https://docs.google.com/document/d/1JayiuboL3Ie47uJichXcj69pYMMK5ORI/edit?usp=sharing&ouid=103570595265825673215&rtpof=true&sd=true"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="profile-card-icon"
							src="./assets/icons/cv.svg"
							alt="cv-icon"
						/>
					</a>
				</AnimationOnScroll>
			</div>
		</section>
	);
};
