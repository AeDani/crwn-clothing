import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
	return (
		<div className="cart-item">
			<img className="img" src={imageUrl} alt="item" />
			<div className="item-details">
				<div className="name">{name}</div>
				<div>{`${quantity} x $${price}`}</div>
			</div>
		</div>
	);
};

export default CartItem;
