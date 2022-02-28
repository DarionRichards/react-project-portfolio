import "./TechSkills.css";

import {SkillsCard} from "../SkillsCard";
import {Skills} from "../SkillsCard/sections/Skills";
import {frontEndSkillsData} from "../../data/skills/frontEndSkillsData";
import {backEndSkillsData} from "../../data/skills/backEndSkillsData";
import {queryLanguageSkillsData} from "../../data/skills/queryLanguageSkillsData";
import {versionControlSkillsData} from "../../data/skills/versionControlSkillsData";
import {databaseSkillsData} from "../../data/skills/databaseSkillsData";
import {hostingPlatformSkillsData} from "../../data/skills/hostingPlatformSkillsData";
import {AnimationOnScroll} from "react-animation-on-scroll";

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
		<section className="tech-skills-section wrapper" id="tech-skills">
			<h1 className="heading">TECH SKILLS</h1>
			<section className="skill-cards-section">
				<div className="skill-card-column">
					<AnimationOnScroll
						animateIn="animate__fadeInLeftBig"
						animateOnce={true}
					>
						<SkillsCard title="Front-End" skills={frontEndSkills} />
					</AnimationOnScroll>
				</div>

				<div className="skill-card-column">
					<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
						<SkillsCard title="Back-End" skills={backEndSkills} />
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
						<SkillsCard title="Query Languages" skills={queryLanguageSkills} />
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
						<SkillsCard title="Version Control" skills={versionControlSkills} />
					</AnimationOnScroll>
				</div>
				<div className="skill-card-column">
					<AnimationOnScroll
						animateIn="animate__fadeInRightBig"
						animateOnce={true}
					>
						<SkillsCard title="Databases" skills={databaseSkills} />
					</AnimationOnScroll>
					<AnimationOnScroll
						animateIn="animate__fadeInRightBig"
						animateOnce={true}
					>
						<SkillsCard
							title="Hosting Platforms"
							skills={hostingPlatformSkills}
						/>
					</AnimationOnScroll>
				</div>
			</section>
		</section>
	);
};
