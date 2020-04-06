import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
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
					<CartIcon />
				</div>
				{hidden ? null : <CartDropdown />}
			</Router>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
