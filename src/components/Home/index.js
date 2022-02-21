import AboutMe from "../AboutMe";
import {GroupProjects} from "../GroupProjects";
import {IndividualProjectsSection} from "../IndividualProjectsSection";
import Nav from "../Nav";
import "./reset.css";
import "./styles.css";

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
