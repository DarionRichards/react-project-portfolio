import "./GroupProjects.css";

export const GroupProjects = () => {
	return (
		<section id="projects" class="group-project-section wrapper">
			<section class="heading">
				<h1 class="end">GROUP PROJECTS</h1>
			</section>

			<section class="main-project">
				<section class="main-project-card">
					<a href="https://darionrichards.github.io/readers-revival/">
						<img
							src="./assets/images/readers-revival-screenshot.png"
							alt="Horiseon Project Demo Example"
							width="700"
							height="700"
						/>
					</a>
				</section>
				<section class="main-project-card">
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
