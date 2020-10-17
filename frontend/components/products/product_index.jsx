import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchProducts();
    };

    render(){
        let products = this.props.products.map(product => {
            return <ProductIndexItem product={product} deleteProduct={this.props.deleteProduct} />
        })
        return(
            <div className="hello">
                hello
            </div>
        )
    }
}

export default ProductIndex;