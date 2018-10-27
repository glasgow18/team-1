import React, {Component} from 'react';
import './searchpage.css';
import SearchResults from './searchresults.js';
import SearchBar from './searchbar.js';
class SearchPage extends Component{
    render(){
        return (
          <div className="container-fluid">
            <SearchBar/>
            <SearchResults/>
          </div>
        );
    }
}

export default SearchPage
