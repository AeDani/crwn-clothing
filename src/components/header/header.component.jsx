import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Router>
				<Link className="logo-container" to="/">
					<Logo className="logo" />
				</Link>

				<div className="options">
					<Link className="option" to="/shop">
						SHOP
					</Link>
					<Link className="option" to="/shop">
						CONTACT
					</Link>

					{currentUser ? (
						<div
							className="option"
							onClick={() => {
								auth.signOut();
							}}
						>
							SIGN OUT
						</div>
					) : (
						<Link className="option" to="/signin">
							SIGN IN
						</Link>
					)}
				</div>
			</Router>
		</div>
	);
};

export default Header;
