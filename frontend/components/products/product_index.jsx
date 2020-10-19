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

        const col1 = [];
        const col2 = [];
        const col3 = [];
        const col4 = [];
        const col5 = [];
        const col6 = [];
        const col7 = [];
        let i = 1;

        this.props.products.forEach((product) => {
            if (i % 5 === 1) {
                col1.push(<ProductIndexItem key={product.id} product={product}/>);
            }
            if (i % 5 === 2) {
                col2.push(<ProductIndexItem  key={product.id} product={product}/>);
            }
            if (i % 5 === 3) {
                col3.push(<ProductIndexItem key={product.id} product={product}/>);
            }
            if (i % 5 === 4) {
                col4.push(<ProductIndexItem key={product.id} product={product}/>);
            }
            if (i % 5 === 0) {
                col5.push(<ProductIndexItem key={product.id} product={product}/>);
            }

            
            i++;
        });

        return(
            <section>
                <div className='column-container'>
                    <div className="column-wrapper">
                        <div className="product-columns">
                            {col1}
                        </div>
                        <div className="product-columns">
                            {col2}
                        </div>
                        <div className="product-columns">
                            {col3}
                        </div>
                        <div className="product-columns">
                            {col4}
                        </div>
                        <div className="product-columns">
                            {col5}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductIndex;