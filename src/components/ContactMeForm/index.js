import env from "react-dotenv";
import emailjs from "@emailjs/browser";
import {useState} from "react";

export const ContactForm = () => {
	const [formValues, setFormValues] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		setFormValues((formValues) => {
			return {
				...formValues,
				[event.target.name]: event.target.value,
			};
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();

		const emailParams = formValues;

		if (!emailParams.fullName && !emailParams.email && !emailParams.message) {
			alert("Please enter Full Name, Email and Message");
		} else if (!emailParams.fullName) {
			alert("Please enter your full name.");
		} else if (!emailParams.email) {
			alert("Please enter your email.");
		} else if (!emailParams.message) {
			alert("Please enter a message.");
		} else {
			emailjs
				.send(
					env.EMAILJS_SERVICEID,
					env.EMAILJS_TEMPLATEID,
					emailParams,
					env.EMAILJS_USERID
				)
				.then(
					(result) => {
						console.log(result.text);
						alert("Your email was successfully sent!");
						setFormValues({
							fullName: "",
							email: "",
							message: "",
						});
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<>
			<form className="contact-form-container" onSubmit={sendEmail}>
				<input
					name="fullName"
					type="text"
					placeholder="Name"
					onChange={handleChange}
					value={formValues.fullName}
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					onChange={handleChange}
					value={formValues.email}
				/>
				<textarea
					name="message"
					type="text"
					placeholder="Message"
					onChange={handleChange}
					value={formValues.message}
				/>
				<button type="submit">Send</button>
			</form>
		</>
	);
};
