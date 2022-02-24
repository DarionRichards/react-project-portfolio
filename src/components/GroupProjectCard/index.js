export const GroupProjectCard = (props) => {
	return (
		<section className="main-project-card">
			<a href={props.deployedLink}>
				<img src={props.imagePath} alt={props.imageAlt} />
			</a>
		</section>
	);
};
