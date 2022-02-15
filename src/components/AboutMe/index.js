import "./AboutMe.css";

const AboutMe = () => {
	return (
		<>
			<section id="about-me" class="about-me-section wrapper">
				<div>
					<div class="heading">
						<h1>ABOUT ME</h1>
					</div>
					<p class="about-text">
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

				<section class="profile-card">
					<div class="centre">
						<img
							class="profile-img"
							src="./images/profile-img.png"
							alt="Projects Author (Darion Richards)"
						/>
						<h2>Darion Richards</h2>
						<div class="profile-status">
							<i class="fas fa-briefcase"></i>
							<h6>Full Stack Developer</h6>
						</div>
						<div class="profile-location">
							<i class="fas fa-map-marker-alt"></i>
							<h6>Birmingham, UK</h6>
						</div>
					</div>
					<div class="profile-card-skills centre">
						<i class="fab fa-html5 gradient"></i>
						<i class="fab fa-css3-alt"></i>
						<i class="fab fa-js"></i>
						<i class="fab fa-node"></i>
						<i class="fab fa-react"></i>
					</div>
					<div class="profile-card-links">
						<a href="https://github.com/DarionRichards">
							<i class="fab fa-github"></i>
						</a>
						<a href="https://www.linkedin.com/in/darionrichards/">
							<i class="fab fa-linkedin"></i>
						</a>
					</div>
				</section>
			</section>
		</>
	);
};

export default AboutMe;
