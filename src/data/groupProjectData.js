import readersRevival from "../assets/images/readers-revival-screenshot.png";
import fitnessApp from "../assets/images/fitness-app.png";
import forbiddin from "../assets/images/www.forbiddin.com.png";

export const groupProjectData = [
	{
		name: "Readers Revival",
		description:
			"Reading Revivals is a reading planner application. In the reading planner the user can search for a specific book or get ideas on what to read by clicking on the generate random book button.The user can also add books to their planner and view scheduled books per month in the my planner page. To go with our theme of reading we have incorporated quotes which is displayed in the home page.",
		imagePath: readersRevival,
		imageAlt: "Readers Revival Example",
		deployedLink: "https://darionrichards.github.io/readers-revival/",
		gitHubRepo: "https://github.com/DarionRichards/readers-revival/tree/main",
		smallAnimationEffect: "animate__fadeInLeft",
		largeAnimationEffect: "animate__fadeInLeft",
		theme: "orange",
	},
	{
		name: "Fitness App",
		description: "Fitness App is a ",
		imagePath: fitnessApp,
		imageAlt: "Fitness App Example",
		deployedLink: "",
		gitHubRepo: "https://github.com/DarionRichards/fitness-app",
		smallAnimationEffect: "animate__fadeInRight",
		largeAnimationEffect: "animate__fadeInUp",
		theme: "lightblue",
	},
	{
		name: "Forbiddin",
		description:
			"A full-stack interactive live auction application which allows users to bid on high-end estates that belonged to Karl Lagerfeld.",
		imagePath: forbiddin,
		imageAlt: "Forbiddin Example",
		deployedLink: "http://www.forbiddin.com",
		gitHubRepo: "https://github.com/andradag/private-live-auction-client",
		smallAnimationEffect: "animate__fadeInUp",
		largeAnimationEffect: "animate__fadeInRight",
		theme: "orange",
	},
];
