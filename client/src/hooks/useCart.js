import { useSelector } from 'react-redux';

const useCart = id => {
	const cartList = useSelector(state =>
		state.cartReducer.currentCart.map(prod => prod.product._id)
	);
	return cartList?.includes(id);
};

export default useCart;
