import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    return(
        <div>
            <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
        </div>
    )
}

export default ProductIndexItem;