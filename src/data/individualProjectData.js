import codingQuiz from "../assets/images/quiz-challenge.jpg";
import weekDayPlanner from "../assets/images/week-day-planner.jpg";
import weatherDashboard from "../assets/images/weather-dashboard.jpg";
import randomPasswordGenerator from "../assets/images/random-password-gen.jpg";
import readmeGenerator from "../assets/images/README-GENERATOR.jpg";
import teamProfileGenerator from "../assets/images/Team-profile-gen.jpg";
import noteTaker from "../assets/images/note-taker.jpg";
import employeeTracker from "../assets/images/employee-tracker.jpg";
import ecommerceBackEnd from "../assets/images/ecommerce-back-end.jpg";
import blogSite from "../assets/images/blog-site.jpg";

export const individualProjectData = [
	{
		title: "Coding Quiz Challenge",
		text: "A dynamic web application where users answer a series of questions and stores their score after the questions have been answered. After the user has finished with the quiz, all their scores will be stored.",
		imagePath: codingQuiz,
		imageAlt: "Quiz Challenge Preview",
		deployedLink: "https://darionrichards.github.io/quiz-challenge/",
		gitHubRepo: "https://github.com/DarionRichards/quiz-challenge",
	},
	{
		title: "Week Day Planner",
		text: "A dynamic web application that helps a user plan out their day-to-day tasks. The daily planner is to assist users throughout their work day",
		imagePath: weekDayPlanner,
		imageAlt: "Week Day Planner Preview",
		deployedLink: "https://darionrichards.github.io/week-day-planner/",
		gitHubRepo: "https://github.com/DarionRichards/week-day-planner",
	},
	{
		title: "Weather Dashboard",
		text: "A dynamic web application where users can search a specific location, which will force web application to fetch data from the OpenWeatherMap API.",
		imagePath: weatherDashboard,
		imageAlt: "Weather Dashboard Preview",
		deployedLink: "https://darionrichards.github.io/weather-dashboard/",
		gitHubRepo: "https://github.com/DarionRichards/weather-dashboard",
	},
	{
		title: "Random Password Generator",
		text: "A functional random password generator, which generates a random password. The user is able to customize their password to their needs, where they can choose, the password length; to inculude capital letters, lowercase letters, numbers and symbols.",
		imagePath: randomPasswordGenerator,
		imageAlt: "Random Password Generator Preview",
		deployedLink: "https://darionrichards.github.io/random-password-gen/",
		gitHubRepo: "https://github.com/DarionRichards/random-password-gen",
	},
	{
		title: "README.md File Generator",
		text: "Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer Package.",
		imagePath: readmeGenerator,
		imageAlt: "README.md File Generator Preview",
		deployedLink: "",
		gitHubRepo: "https://github.com/DarionRichards/README-generator",
	},
	{
		title: "Team Profile Generator",
		text: "This application will automatically generate a HTML file, relating to the information a user has entered in order to build their team profiles. The file generated will allow quick access to social links, such as GitHub profiles and Emails to each team member included.",
		imagePath: teamProfileGenerator,
		imageAlt: "Team Profile Generator Preview",
		deployedLink: "",
		gitHubRepo: "https://github.com/DarionRichards/team-profile-generator",
	},
	{
		title: "Note Taking Application",
		text: "A Note Taking Application that can be used to write and save notes, in order to help organise a day or even week.",
		imagePath: noteTaker,
		imageAlt: "Note Taker Preview",
		deployedLink: "http://still-taiga-68575.herokuapp.com/",
		gitHubRepo: "https://github.com/DarionRichards/note-taker",
	},
	{
		title: "Employee Tracker",
		text: "For this project, I have created a command line (CRUD) application, where users are able to Add, Read, Update and Delete employees from a MySQL Database.",
		imagePath: employeeTracker,
		imageAlt: "Employee Tracker Preview",
		deployedLink: "",
		gitHubRepo: "https://github.com/DarionRichards/employee-tracker",
	},
	{
		title: "E-Commerce Back-end",
		text: "I have been approached to create a E-Commerce Back End where I will be configuring a working Express.js API to use Sequelize to interact with a MySQL database.",
		imagePath: ecommerceBackEnd,
		imageAlt: "E-commerce Back-end Preview",
		deployedLink: "",
		gitHubRepo: "https://github.com/DarionRichards/ecommerce-back-end",
	},
	{
		title: "CMS Blog",
		text: "This project will allow users to read, create, edit and delete blogs, as well as being able to comment on other blogs they discover. In order to access these features, users will need to be signed in where they can access their personal dashboard with their currently publised blogs. If a user is not signed in, they do not have the rights to create blogs or comments, as well as editing and deleting blogs.",
		imagePath: blogSite,
		imageAlt: "CMS Blog Site Preview",
		deployedLink: "https://shielded-woodland-84832.herokuapp.com/",
		gitHubRepo: "https://github.com/DarionRichards/cms-blog-site",
	},
];
