import {IndividualProjectCard} from "../IndividualProjectCard";
import "./IndividualProjectsSection.css";
import {projectsArray} from "./projectData";

export const IndividualProjectsSection = () => {
	const project = projectsArray.map((project, i) => {
		return (
			<IndividualProjectCard
				key={i}
				title={project.title}
				text={project.text}
				imagePath={project.imagePath}
				imageAlt={project.imageAlt}
				deployedLink={project.deployedLink}
				gitHubRepo={project.gitHubRepo}
			/>
		);
	});

	return (
		<section
			id="individual-projects"
			className="individual-project-section wrapper"
		>
			<section className="heading">
				<h1 className="start">INDIVIDUAL PROJECTS</h1>
			</section>
			<section className="project-card-container">{project}</section>
		</section>
	);
};
