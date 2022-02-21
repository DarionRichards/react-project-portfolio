import {AnimationOnScroll} from "react-animation-on-scroll";
import "./IndividualProjectCard.css";
import "animate.css";

export const IndividualProjectCard = (props) => {
	return (
		<AnimationOnScroll
			delay={200}
			animateIn="animate__fadeInLeftBig"
			animateOnce={true}
		>
			<section className="project-card ">
				{props.deployedLink ? (
					<a
						href={props.deployedLink}
						style={
							({backgroundColor: "gray"},
							{borderRadiusInputTopLeft: "1rem"},
							{borderRadiusInputTopRight: "1rem"})
						}
					>
						<img
							className="project-img"
							src={props.imagePath}
							alt={props.imageAlt}
							width="250"
							height="350"
						/>
					</a>
				) : (
					<a
						href={props.gitHubRepo}
						style={
							({backgroundColor: "gray"},
							{borderRadiusInputTopLeft: "1rem"},
							{borderRadiusInputTopRight: "1rem"})
						}
					>
						<img
							className="project-img"
							src={props.imagePath}
							alt={props.imageAlt}
							width="250"
							height="350"
						/>
					</a>
				)}

				<div className="project-card-body">
					<div>
						<h3 className="project-card-title">{props.title}</h3>
						<p className="project-card-text">{props.text}</p>
					</div>
					<div className="card-button-container">
						{props.deployedLink && (
							<a href={props.deployedLink} className="button">
								Deployed App
							</a>
						)}
						<a href={props.gitHubRepo} className="button">
							GitHub Repository
						</a>
					</div>
				</div>
			</section>
		</AnimationOnScroll>
	);
};
