import Media from "react-media";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {groupProjectData} from "../../data/groupProjectData";
import {GroupProjectCard} from "../GroupProjectCard";
import "./GroupProjects.css";

export const GroupProjects = () => {
	const largeProjects = groupProjectData.map((each, i) => (
		<AnimationOnScroll animateIn={each.largeAnimationEffect} animateOnce={true}>
			<GroupProjectCard
				key={i}
				name={each.name}
				description={each.description}
				imagePath={each.imagePath}
				imageAlt={each.imageAlt}
				deployedLink={each.deployedLink}
				repository={each.gitHubRepo}
				theme={each.theme}
			/>
		</AnimationOnScroll>
	));

	const smallProjects = groupProjectData.map((each, i) => (
		<AnimationOnScroll animateIn={each.smallAnimationEffect} animateOnce={true}>
			<GroupProjectCard
				key={i}
				name={each.name}
				description={each.description}
				imagePath={each.imagePath}
				imageAlt={each.imageAlt}
				deployedLink={each.deployedLink}
				repository={each.gitHubRepo}
				theme={each.theme}
			/>
		</AnimationOnScroll>
	));

	return (
		<section id="group-projects" className="group-project-section wrapper">
			<section className="heading">
				<h1 className="end">GROUP PROJECTS</h1>
			</section>

			<section className="main-project">
				<Media
					queries={{
						small: "(max-width: 1800px)",
						large: "(min-width: 1800px)",
					}}
				>
					{(matches) => (
						<>
							{matches.small && smallProjects}
							{matches.large && largeProjects}
						</>
					)}
				</Media>
			</section>
		</section>
	);
};
