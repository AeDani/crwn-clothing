import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Password dont match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });
		} catch (error) {
			alert(error.message);
			console.error(error);
		}

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="sign-up">
				<h2 className="title">I dont have an account</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						type="text"
						value={displayName}
						onChange={this.handleChange}
						label="display name"
						required
					/>
					<FormInput
						name="email"
						type="email"
						value={email}
						onChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						onChange={this.handleChange}
						label="password"
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						onChange={this.handleChange}
						label="confirm password"
						required
					/>
					<CustomButton type="submit">SIGN UP </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
