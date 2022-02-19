import "./Nav.css";

const Nav = () => {
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
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="about-me"
							>
								ABOUT ME
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="project"
							>
								PROJECTS
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="contact-me"
							>
								CONTACT ME
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
