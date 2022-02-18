import AboutMe from "./components/AboutMe";
import {GroupProjects} from "./components/GroupProjects";
// import {IndividualProjects} from "./components/IndividualProjects";
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
				{/* <IndividualProjects /> */}
			</main>
		</>
	);
}

export default App;
