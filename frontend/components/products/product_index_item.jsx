import React from "react";
import { Link } from "react-router-dom";

const ProductIndexItem = (props) => {
    return (
        <div>
            <Link className="prod-words" to={`/products/${props.product.id}`}>
                <div className="product-image">
                    <img src={props.product.photo_url} />
                    <div className="product-info">
                        <p>{props.product.name}</p>
                        <p>${props.product.price}.00</p>
                        <p>{props.product.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductIndexItem;
