import {useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

export const GroupProjectCard = (props) => {
	const [showButton, setShowButton] = useState({display: "none"});
	const [opacityHover, setOpacityHover] = useState();
	const [handleOpenModal, setHandleOpenModal] = useState(false);

	const modalStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "50%",
		minWidth: 300,
		maxWidth: 700,
		bgcolor: "background.paper",
		borderRadius: "0.6rem",
		boxShadow: 24,
		p: 4,
	};

	return (
		<section
			className="main-project-card"
			onMouseEnter={(e) => {
				setShowButton({display: "block"});
				setOpacityHover({opacity: "0.4", transition: "all 100ms ease-in"});
			}}
			onMouseLeave={(e) => {
				setShowButton({display: "none"});
				setOpacityHover({
					opacity: "unset",
					transition: "all 200ms ease-out",
				});
			}}
		>
			<img src={props.imagePath} alt={props.imageAlt} style={opacityHover} />
			<button
				className="button"
				style={showButton}
				onMouseEnter={(e) => {
					setOpacityHover({opacity: "0.4", transition: "all 100ms ease-in"});
					setShowButton({backgroundColor: props.theme});
				}}
				onMouseLeave={(e) => {
					setShowButton();
				}}
				onClick={() => {
					setHandleOpenModal(true);
				}}
			>
				View More
			</button>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={handleOpenModal}
				onClose={() => {
					setHandleOpenModal(false);
					setOpacityHover({
						opacity: "unset",
						transition: "all 200ms ease-out",
					});
					setShowButton({display: "none"});
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={handleOpenModal}>
					<section className="modal-flex">
						<Box sx={modalStyle}>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2"
							>
								{props.name}
							</Typography>
							<Typography id="transition-modal-description" sx={{mt: 2, mb: 2}}>
								{props.description}
							</Typography>
							<a
								href={props.deployedLink}
								style={{textAlign: "center", width: "70%"}}
							>
								<button
									className="button modal-button"
									style={{backgroundColor: props.theme, color: "black"}}
								>
									Deployed Application
								</button>
							</a>
							<a
								href={props.repository}
								style={{textAlign: "center", width: "70%"}}
							>
								<button
									className="button modal-button"
									style={{backgroundColor: props.theme, color: "black"}}
								>
									GitHub Repository
								</button>
							</a>
						</Box>
					</section>
				</Fade>
			</Modal>
		</section>
	);
};
