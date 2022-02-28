import "./TechSkills.css";

import htmlIcon from "../../assets/icons/html-5.svg";
import cssIcon from "../../assets/icons/css-3.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import reactIcon from "../../assets/icons/react.svg";
import reactRouterIcon from "../../assets/icons/react-router.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import handlebarsIcon from "../../assets/icons/handlebars.svg";
import materialuiIcon from "../../assets/icons/material-ui.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import expressIcon from "../../assets/icons/expressjs.svg";
import graphqlIcon from "../../assets/icons/graphql.svg";
import apolloIcon from "../../assets/icons/apollo.svg";
import githubIcon from "../../assets/icons/github.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import mongodbIcon from "../../assets/icons/mongodb.svg";
import herokuIcon from "../../assets/icons/heroku.svg";

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
								<img src={htmlIcon} alt="html icon" />
								HTML
							</a>
							<a
								href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1"
								target="_blank"
								rel="noreferrer"
							>
								<img src={cssIcon} alt="css icon" />
								CSS
							</a>
							<a
								href="https://www.javascript.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={jsIcon} alt="javascript icon" />
								JavaScript
							</a>
							<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
								<img src={reactIcon} alt="react icon" />
								ReactJS
							</a>
							<a
								href="https://reactrouter.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={reactRouterIcon} alt="react-router icon" />
								React Router
							</a>
							<a
								href="https://getbootstrap.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={bootstrapIcon} alt="Bootstrap icon" />
								Bootstrap
							</a>
							<a
								href="https://handlebarsjs.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={handlebarsIcon} alt="Handlebars icon" />
								Handlebars.js
							</a>
							<a href="https://mui.com/" target="_blank" rel="noreferrer">
								<img src={materialuiIcon} alt="material-ui icon" />
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
								<img src={nodejsIcon} alt="NodeJS icon" />
								NodeJS
							</a>
							<a href="https://expressjs.com/" target="_blank" rel="noreferrer">
								<img src={expressIcon} alt="ExpressJS icon" />
								ExpressJS
							</a>
						</div>
					</div>
					<div className="skill-card ">
						<h2 className="skill-card-title heading centre">Query Languages</h2>
						<div className="skills-section">
							<a href="https://graphql.org/" target="_blank" rel="noreferrer">
								<img src={graphqlIcon} alt="GraphQL icon" />
								GraphQL
							</a>
							<a
								href="https://www.apollographql.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={apolloIcon} alt="ApolloClient icon" />
								Apollo Client
							</a>
						</div>
					</div>
					<div className="skill-card ">
						<h2 className="skill-card-title heading centre">Version Control</h2>
						<div className="skills-section">
							<a href="https://github.com" target="_blank" rel="noreferrer">
								<img src={githubIcon} alt="GitHub icon" />
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
								<img src={mysqlIcon} alt="MySQL icon" />
								MySQL
							</a>
							<a
								href="https://www.mongodb.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={mongodbIcon} alt="MongoDB icon" />
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
								<img src={herokuIcon} alt="Heroku icon" />
								Heroku
							</a>
							<a
								href="https://pages.github.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={githubIcon} alt="GitHub icon" />
								GitHub Pages
							</a>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
