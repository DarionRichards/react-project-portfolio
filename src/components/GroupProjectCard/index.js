import {useState} from "react";
export const GroupProjectCard = (props) => {
	const [showButton, setShowButton] = useState({display: "none"});
	const [opacityHover, setOpacityHover] = useState();
	return (
		<section
			className="main-project-card"
			onMouseEnter={(e) => {
				setShowButton({display: "block"});
			}}
			onMouseLeave={(e) => {
				setShowButton({display: "none", opacity: "1"});
			}}
		>
			<a href={props.deployedLink}>
				<img
					src={props.imagePath}
					alt={props.imageAlt}
					style={opacityHover}
					onMouseEnter={(e) => {
						setOpacityHover({opacity: "0.4", transition: "all 100ms ease-in"});
					}}
					onMouseLeave={(e) => {
						setOpacityHover({
							opacity: "unset",
							transition: "all 200ms ease-out",
						});
					}}
				/>
				<button
					style={showButton}
					onMouseEnter={(e) => {
						setOpacityHover({opacity: "0.4", transition: "all 100ms ease-in"});
						setShowButton({backgroundColor: props.buttonColour});
					}}
					onMouseLeave={(e) => {
						setShowButton({opacity: "1"});
					}}
				>
					View More
				</button>
			</a>
		</section>
	);
};
