import AboutMe from "./components/AboutMe";
import {GroupProjects} from "./components/GroupProjects";
import {IndividualProjectsSection} from "./components/IndividualProjectsSection";
import Nav from "./components/Nav";
import "./reset.css";
import "./styles.css";

function App() {
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
}

export default App;
