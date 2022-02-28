export const Skills = ({link, src, alt, text}) => {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<img src={src} alt={alt} />
			{text}
		</a>
	);
};
