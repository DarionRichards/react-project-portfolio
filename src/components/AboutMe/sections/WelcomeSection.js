import Media from "react-media";
import {TextLoop} from "react-text-loop-next";

export const WelcomeSection = () => {
	return (
		<Media
			query="(min-width: 1050px)"
			render={() => (
				<div className="welcome-section ">
					<h1>
						HI THERE!
						<br />
						I AM DARION RICHARDS
						<br />
					</h1>

					<h1>
						A{" "}
						<TextLoop mask={true}>
							<span>FULL STACK DEVLOPER</span>
							<span>CYBER SECURITY GRADUATE</span>
							<span>ASSISTANT STORE MANAGER</span>
						</TextLoop>
					</h1>
				</div>
			)}
		/>
	);
};
