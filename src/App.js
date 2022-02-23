import {Route, Routes} from "react-router-dom";
import {ContactMe} from "./pages/ContactMe";
import {Home} from "./pages/Home";
import "./reset.css";
import "./styles.css";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-me" element={<ContactMe />} />
			</Routes>
		</>
	);
}

export default App;
