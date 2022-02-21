import {Route, Routes} from "react-router-dom";
import {ContactMe} from "./components/ContactMe";
import {Home} from "./components/Home";

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
