import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super();
        this.state = {
            searchQuery: ''
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    update(event) {
        event.preventDefault();
        this.setState({ searchQuery: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        
        this.props.fetchSearchProducts(this.state.searchQuery)
            .then(() => this.props.history.push(`/search/${this.state.searchQuery}`));
                    window.scrollTo(0, 0);
    }

    render(){
       
        return(
            <form onSubmit={this.handleSubmit} 
            
            className="search-products-form">
                <i className="fa fa-search">
                <input className="search-input-one" placeholder="Search BidUp" name="search" onChange={this.update} type="text" />
                </i>
               
                <button className="go-button">GO</button>
              
            </form>
            )
    }
}

export default SearchBar