import "./GroupProjects.css";

export const GroupProjects = () => {
	return (
		<section id="group-projects" className="group-project-section wrapper">
			<section className="heading">
				<h1 className="end">GROUP PROJECTS</h1>
			</section>

			<section className="main-project">
				<section className="main-project-card">
					<a href="https://darionrichards.github.io/readers-revival/">
						<img
							src="./assets/images/readers-revival-screenshot.png"
							alt="Horiseon Project Demo Example"
							width="700"
							height="700"
						/>
					</a>
				</section>
				<section className="main-project-card">
					<a href="https://darionrichards.github.io/readers-revival/">
						<img
							src="./assets/images/fitness-app.png"
							alt="Horiseon Project Demo Example"
							width="700"
							height="700"
						/>
					</a>
				</section>
			</section>
		</section>
	);
};
