import React from 'react'

class SearchBar extends React.Component{
    constructor() {
        super();
        this.state = {
            search: ''
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    componentDidMount() {

    }

    update(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        debugger 
        this.props.fetchSearchProducts(this.state.search)
            .then(() => this.props.history.push(`/search/${this.state.search}`));
            window.scrollTo(0, 0);
    }

    render(){
       
        return(
            <form onSubmit={this.handleSubmit} className="search-products-form">
                <i className="fa fa-search">
                <input className="search-input-one" placeholder="Search BidUp" name="search" onChange={this.update} type="text" />
                </i>
                <i className="fas fa-map-marker-alt">
                  <input className="search-input-two" type="text" onChange={this.update} placeholder="Nearby" name="search" />
                </i>
                <button className="go-button">GO</button>
            </form>
            )
    }
}

export default SearchBar