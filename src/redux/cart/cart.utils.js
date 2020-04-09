export const addItemToCart = (cartItems, cartItemsToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => {
		return cartItem.id === cartItemsToAdd.id;
	});

	if (existingCartItem) {
		console.log('inside if');
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemsToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};