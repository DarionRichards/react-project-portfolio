import {AnimationOnScroll} from "react-animation-on-scroll";

export const AboutMeSection = () => {
	return (
		<>
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus
						recusandae amet nostrum odit, ut unde non sint, quia sed inventore
						odio, delectus iure! Eligendi vitae fuga blanditiis accusamus
						tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil natus recusandae amet nostrum odit, ut unde non sint, quia sed
						inventore odio, delectus iure! Eligendi vitae fuga blanditiis
						accusamus tempore! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nihil natus recusandae amet nostrum odit, ut unde
						non sint, quia sed inventore odio, delectus iure! Eligendi vitae
						fuga blanditiis accusamus tempore!
					</p>
				</AnimationOnScroll>
			</AnimationOnScroll>
		</>
	);
};
