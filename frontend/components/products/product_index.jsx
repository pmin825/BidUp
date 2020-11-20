import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger 
        if (this.props.match.url === "/") this.props.fetchProducts();
        // debugger
        window.scrollTo(0, 0);
    };

    // componentWillUnmount() {
    //     this.setState({})
    // }

    render(){

        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let i = 1;

        this.props.products.forEach((product) => {
            if (i % 5 === 1) {
                col1.push(<ProductIndexItem key={product.id} product={product}/>);
            }
            if (i % 5 === 2) {
                col2.push(<ProductIndexItem key={product.id} product={product}/>);
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

        col1 = col1.reverse();
        col2 = col2.reverse();
        col3 = col3.reverse();
        col4 = col4.reverse();
        col5 = col5.reverse();

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