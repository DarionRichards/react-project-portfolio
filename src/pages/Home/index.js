import {AboutMe} from "../../components/AboutMe";
import {GroupProjects} from "../../components/GroupProjects";
import {IndividualProjectsSection} from "../../components/IndividualProjectsSection";
import {Nav} from "../../components/Nav";

export const Home = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<AboutMe />
				<GroupProjects />
				<IndividualProjectsSection />
			</main>
		</>
	);
};
