import "./AboutMe.css";

const AboutMe = () => {
	return (
		<>
			<section id="about-me" className="about-me-section wrapper">
				<div>
					<div className="heading">
						<h1>ABOUT ME</h1>
					</div>
					<p className="about-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil natus
						recusandae amet nostrum odit, ut unde non sint, quia sed inventore
						odio, delectus iure! Eligendi vitae fuga blanditiis accusamus
						tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil natus recusandae amet nostrum odit, ut unde non sint, quia sed
						inventore odio, delectus iure! Eligendi vitae fuga blanditiis
						accusamus tempore! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Nihil natus recusandae amet nostrum odit, ut unde
						non sint, quia sed inventore odio, delectus iure! Eligendi vitae
						fuga blanditiis accusamus tempore!
					</p>
				</div>

				<section className="profile-card">
					<div className="centre">
						<img
							className="profile-img"
							src="./assets/images/profile-img.png"
							alt="Projects Author (Darion Richards)"
						/>
						<h2>Darion Richards</h2>
						<div className="profile-status">
							<i className="fas fa-briefcase"></i>
							<h6>Full Stack Developer</h6>
						</div>
						<div className="profile-location">
							<i className="fas fa-map-marker-alt"></i>
							<h6>Birmingham, UK</h6>
						</div>
					</div>
					<div className="profile-card-skills centre">
						<i className="fab fa-html5 gradient"></i>
						<i className="fab fa-css3-alt"></i>
						<i className="fab fa-js"></i>
						<i className="fab fa-node"></i>
						<i className="fab fa-react"></i>
					</div>
					<div className="profile-card-links">
						<a href="https://github.com/DarionRichards">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/darionrichards/">
							<i className="fab fa-linkedin"></i>
						</a>
					</div>
				</section>
			</section>
		</>
	);
};

export default AboutMe;
