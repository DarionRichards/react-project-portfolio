export const ContactForm = () => {
	return (
		<>
			<form className="contact-form-container">
				<input type="text" value="Name" />
				<input type="text" value="Email" />
				<input type="text" value="Message" />
				<button>Send</button>
			</form>
		</>
	);
};
