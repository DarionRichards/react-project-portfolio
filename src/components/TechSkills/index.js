import "./TechSkills.css";

import {SkillsCard} from "../SkillsCard";
import {Skills} from "../SkillsCard/sections/Skills";
import {frontEndSkillsData} from "../../data/skills/frontEndSkillsData";
import {backEndSkillsData} from "../../data/skills/backEndSkillsData";
import {queryLanguageSkillsData} from "../../data/skills/queryLanguageSkillsData";
import {versionControlSkillsData} from "../../data/skills/versionControlSkillsData";
import {databaseSkillsData} from "../../data/skills/databaseSkillsData";
import {hostingPlatformSkillsData} from "../../data/skills/hostingPlatformSkillsData";

export const TechSkills = () => {
	const frontEndSkills = frontEndSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	const backEndSkills = backEndSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	const queryLanguageSkills = queryLanguageSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	const versionControlSkills = versionControlSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	const databaseSkills = databaseSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	const hostingPlatformSkills = hostingPlatformSkillsData.map((each) => {
		return (
			<Skills link={each.link} src={each.src} alt={each.alt} text={each.text} />
		);
	});

	return (
		<section className="tech-skills-section wrapper">
			<h1 className="heading">TECH SKILLS</h1>
			<section className="skill-cards-section">
				<div className="skill-card-column">
					<SkillsCard title="Front-End" skills={frontEndSkills} />
				</div>

				<div className="skill-card-column">
					<SkillsCard title="Back-End" skills={backEndSkills} />
					<SkillsCard title="Query Languages" skills={queryLanguageSkills} />
					<SkillsCard title="Version Control" skills={versionControlSkills} />
				</div>
				<div className="skill-card-column">
					<SkillsCard title="Databases" skills={databaseSkills} />

					<SkillsCard
						title="Hosting Platforms"
						skills={hostingPlatformSkills}
					/>
				</div>
			</section>
		</section>
	);
};
