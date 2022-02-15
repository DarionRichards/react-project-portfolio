import "./Header.css";

const Header = () => {
	return (
		<header>
			<nav class="navbar navbar-expand-lg nav-background navbar-dark">
				<div class="container-fluid">
					<a class="navbar-brand nav-border-right text-white" href="/">
						PORTFOLIO
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse nav-border-top"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a
									class="nav-link active text-white"
									aria-current="page"
									href="about-me"
								>
									ABOUT ME
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link active text-white"
									aria-current="page"
									href="project"
								>
									PROJECTS
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link active text-white"
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
		</header>
	);
};

export default Header;
