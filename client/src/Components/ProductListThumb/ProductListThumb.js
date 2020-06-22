import React from 'react';
import PropTypes from 'prop-types';
import ProductThumb from './ProductThumb/ProductThumb';
import { ListWrapper } from './styles';

const ProductListThumb = ({ products, size }) => {
	return (
		<ListWrapper>
			{products.map(product => {
				const {
					name,
					itemNo,
					currentPrice,
					imageUrls: [image],
				} = product.product;
				return (
					<li>
						<ProductThumb
							size={size}
							key={product._id}
							name={name}
							price={currentPrice}
							image={image}
							itemNo={itemNo}
							quantity={product.cartQuantity}
						/>
					</li>
				);
			})}
		</ListWrapper>
	);
};

ProductListThumb.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	size: PropTypes.oneOf(['small', 'large']).isRequired,
};

export default ProductListThumb;
