import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ product, search }) => {
    if (search !== "" && (product.name.toLowerCase().indexOf(search.toLowerCase()) === -1)) {
        return null;
    } 
    
    return (
            <div className="search-container">
                <div className="search-name">{product.name}</div>
            </div>
        )
}

export default SearchIndexItem