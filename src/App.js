import AboutMe from "./components/AboutMe";
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
			</main>
		</>
	);
}

export default App;
