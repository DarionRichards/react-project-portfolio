import {AboutMe} from "../../components/AboutMe";
import {GroupProjects} from "../../components/GroupProjects";
import {IndividualProjectsSection} from "../../components/IndividualProjectsSection";
import {Nav} from "../../components/Nav";
import {TechSkills} from "../../components/TechSkills";

export const Home = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<AboutMe />
				<TechSkills />
				<GroupProjects />
				<IndividualProjectsSection />
			</main>
		</>
	);
};
