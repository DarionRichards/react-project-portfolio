import AboutMe from "./components/AboutMe";
import {GroupProjects} from "./components/GroupProjects";
import {IndividualProjectsSection} from "./components/IndividualProjectsSection";
import Nav from "./components/Nav";
import "./reset.css";
import "./styles.css";

// const projectsArray = [
// 	{
// 		id: 1,
// 		title: "Coding Quiz Challenge",
// 		text: "A dynamic web application where users answer a series of questions and stores their score after the questions have been answered. After the user has finished with the quiz, all their scores will be stored.",
// 		deployedLink: "https://darionrichards.github.io/quiz-challenge/",
// 		gitHubRepo: "https://github.com/DarionRichards/quiz-challenge",
// 	},
// ];

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
