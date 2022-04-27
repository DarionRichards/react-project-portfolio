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
				>
					<p className="about-text">
						I am an aspring Full Stack Developer, currently based in the West
						Midlands, I have held a great passion for computing and IT my whole
						life which led to my completing a BSC honours Computer Security
						degree in 2020. I then decided to further enhance my skills by
						completing a full stack development certification at the University
						of Birmingham in 2022, whilst acquiring these qualifications I have
						been working in a management role within the retail industry which
						has also further enhanced my skills in multiple areas. The next
						stage of my life is about pursuing and attaining a full time career
						in the computing/ IT industry and envisage myself joining and
						becoming part of a creative and productive team at a forward looking
						company within the industry.
					</p>
				</AnimationOnScroll>
			</AnimationOnScroll>
		</>
	);
};
