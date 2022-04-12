import {Link} from "react-router-dom";
// import "./Nav.css";

export const NavContact = () => {
	return (
		<nav className="navbar navbar-expand-lg nav-background navbar-dark">
			<div className="container-fluid">
				<ul style={{margin: "unset", padding: "unset"}}>
					<li>
						<Link className="navbar-brand nav-border-right text-white" to="/">
							PORTFOLIO
						</Link>
					</li>
				</ul>
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
							<Link
								to="/"
								style={{cursor: "pointer"}}
								className="nav-link active text-white"
							>
								HOME
							</Link>
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
