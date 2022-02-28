import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import "./Nav.css";

export const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg nav-background navbar-dark">
			<div className="container-fluid">
				<a className="navbar-brand nav-border-right text-white" href="/">
					PORTFOLIO
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse nav-border-top"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<ScrollLink
								to="about-me"
								style={{cursor: "pointer"}}
								className="nav-link active text-white"
							>
								ABOUT ME
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								to="tech-skills"
								style={{cursor: "pointer"}}
								className="nav-link active text-white"
							>
								TECH SKILLS
							</ScrollLink>
						</li>
						<li className="nav-item">
							<ScrollLink
								to="group-projects"
								style={{cursor: "pointer"}}
								className="nav-link active text-white"
							>
								PROJECTS
							</ScrollLink>
						</li>
						<li className="nav-item">
							<Link to={"/contact-me"} className="nav-link active text-white">
								CONTACT ME
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
