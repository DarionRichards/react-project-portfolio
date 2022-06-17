export const SkillsCard = ({title, skills}) => {
	return (
		<div className="skill-card">
			<h2 className="skill-card-title heading centre">{title}</h2>
			<div className="skills-section">{skills}</div>
		</div>
	);
};
