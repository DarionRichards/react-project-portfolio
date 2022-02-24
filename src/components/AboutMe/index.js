import {AnimationOnScroll} from "react-animation-on-scroll";
import Tilt from "react-parallax-tilt";
import {ProfileCard} from "../ProfileCard";
import "./AboutMe.css";

export const AboutMe = () => {
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
						<ProfileCard />
					</Tilt>
				</AnimationOnScroll>
			</section>
		</>
	);
};
