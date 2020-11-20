import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        // this.props.fetchProducts()
        window.scrollTo(0,0)
    }

    onChange(e) {
        this.setState({ search: e.target.value })
    }

    render () {
        debugger
        const { search } = this.state;
        // const { products } = this.props;
        
        if (!this.props.products) return null;
        const search_products = this.props.products.map((product, idx) => {
            return <SearchIndexItem product={product} key={idx} search={search}/>
        })

        return (
            <div className="search-product-box">
 
                <div className='search-container'>
   
                        <input type='text' className='search-input effect-2' placeholder="SEARCH PRODUCT" onChange={this.onChange}/>
                        <span className="focus-border"></span>
                
                </div>
                 
                <div className='product-ul'>
                    {search_products}
                </div>
            </div>
        )
    }
}

export default SearchIndex
