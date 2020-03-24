import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';

import './header.styles.scss';

const Header = () => {
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
				</div>
			</Router>
		</div>
	);
};

export default Header;
