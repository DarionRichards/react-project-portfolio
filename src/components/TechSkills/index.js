import "./TechSkills.css";

export const TechSkills = () => {
	return (
		<section className="tech-skills-section wrapper">
			<h1 className="heading">TECH SKILLS</h1>
			<section className="skill-cards-section">
				<div className="skill-card-column">
					<div className="skill-card">
						<h2 className="skill-card-title heading centre">Front-End</h2>
						<div className="skills-section">
							<a
								href="https://en.wikipedia.org/wiki/HTML5"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/html-5.svg" alt="html icon" />
								HTML
							</a>
							<a
								href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/css-3.svg" alt="css icon" />
								CSS
							</a>
							<a
								href="https://www.javascript.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./assets/icons/javascript.svg"
									alt="javascript icon"
								/>
								JavaScript
							</a>
							<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
								<img src="./assets/icons/react.svg" alt="react icon" />
								ReactJS
							</a>
							<a
								href="https://reactrouter.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./assets/icons/react-router.svg"
									alt="react-router icon"
								/>
								React Router
							</a>
							<a
								href="https://getbootstrap.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/bootstrap.svg" alt="Bootstrap icon" />
								Bootstrap
							</a>
							<a
								href="https://handlebarsjs.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="./assets/icons/handlebars.svg"
									alt="Handlebars icon"
								/>
								Handlebars.js
							</a>
							<a href="https://mui.com/" target="_blank" rel="noreferrer">
								<img
									src="./assets/icons/material-ui.svg"
									alt="material-ui icon"
								/>
								Material UI
							</a>
						</div>
					</div>
				</div>

				<div className="skill-card-column">
					<div className="skill-card ">
						<h2 className="skill-card-title  heading centre">Back-End</h2>
						<div className="skills-section">
							<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
								<img src="./assets/icons/nodejs.svg" alt="NodeJS icon" />
								NodeJS
							</a>
							<a href="https://expressjs.com/" target="_blank" rel="noreferrer">
								<img src="./assets/icons/expressjs.svg" alt="ExpressJS icon" />
								ExpressJS
							</a>
						</div>
					</div>
					<div className="skill-card ">
						<h2 className="skill-card-title heading centre">Query Languages</h2>
						<div className="skills-section">
							<a href="https://graphql.org/" target="_blank" rel="noreferrer">
								<img src="./assets/icons/graphql.svg" alt="GraphQL icon" />
								GraphQL
							</a>
							<a
								href="https://www.apollographql.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/apollo.svg" alt="ApolloClient icon" />
								Apollo Client
							</a>
						</div>
					</div>
					<div className="skill-card ">
						<h2 className="skill-card-title heading centre">Version Control</h2>
						<div className="skills-section">
							<a href="https://github.com" target="_blank" rel="noreferrer">
								<img src="./assets/icons/github.svg" alt="GitHub icon" />
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="skill-card-column">
					<div className="skill-card ">
						<h2 className="skill-card-title heading centre">Database</h2>
						<div className="skills-section">
							<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
								<img src="./assets/icons/mysql.svg" alt="MySQL icon" />
								MySQL
							</a>
							<a
								href="https://www.mongodb.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/mongodb.svg" alt="MongoDB icon" />
								MongoDB
							</a>
						</div>
					</div>

					<div className="skill-card">
						<h2 className="skill-card-title heading centre">
							Hosting Platforms
						</h2>
						<div className="skills-section">
							<a href="https://www.heroku.com" target="_blank" rel="noreferrer">
								<img src="./assets/icons/heroku.svg" alt="Heroku icon" />
								Heroku
							</a>
							<a
								href="https://pages.github.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src="./assets/icons/github.svg" alt="GitHub icon" />
								GitHub Pages
							</a>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
