import {AnimationOnScroll} from "react-animation-on-scroll";
import Tilt from "react-parallax-tilt";
import {AboutMeSection} from "../AboutMe/sections/AboutMeSection";
import {WelcomeSection} from "../AboutMe/sections/WelcomeSection";
import {ProfileCard} from "../ProfileCard";
import "./AboutMe.css";

export const AboutMe = () => {
	return (
		<>
			<section id="about-me" className="about-me-section wrapper">
				<div>
					<WelcomeSection />
					<AboutMeSection />
				</div>
				<AnimationOnScroll
					animateOnce={true}
					animateIn="animate__slideInRight"
					duration={2}
				>
					<Tilt className="tilt-element" perspective={700} scale={1.02}>
						<ProfileCard />
					</Tilt>
				</AnimationOnScroll>
			</section>
		</>
	);
};
