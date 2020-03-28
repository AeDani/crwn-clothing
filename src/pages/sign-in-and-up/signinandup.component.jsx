import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './signinandup.styles.scss';

const SignInAndUpPage = () => {
	return (
		<div className="sign-in-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndUpPage;
