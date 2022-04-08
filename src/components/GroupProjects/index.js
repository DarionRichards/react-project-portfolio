import {AnimationOnScroll} from "react-animation-on-scroll";
import {groupProjectData} from "../../data/groupProjectData";
import {GroupProjectCard} from "../GroupProjectCard";
import "./GroupProjects.css";

export const GroupProjects = () => {
	const projects = groupProjectData.map((each, i) => (
		<AnimationOnScroll animateIn={each.animationEffect} animateOnce={true}>
			<GroupProjectCard
				key={i}
				imagePath={each.imagePath}
				imageAlt={each.imageAlt}
				deployedLink={each.deployedLink}
				buttonColour={each.moreInfoButton}
			/>
		</AnimationOnScroll>
	));

	return (
		<section id="group-projects" className="group-project-section wrapper">
			<section className="heading">
				<h1 className="end">GROUP PROJECTS</h1>
			</section>

			<section className="main-project">{projects}</section>
		</section>
	);
};
