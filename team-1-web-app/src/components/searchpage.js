import React, {Component} from 'react';
import './searchpage.css';
import SearchResults from './searchresults.js';
import SearchBar from './searchbar.js';
class SearchPage extends Component{
    render(){
        return (
          <div className="container-fluid">
          <div>
          <div className="jumbotron">
          <h2>Enter a search</h2>
          <p className="lead">Something like nature sounds...</p>
          </div>
            <div className="row">
              <div className="col-sm-8">
              <form>
                  <div class="form-group">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. Sound" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                  </div>
              </form>
              </div>
              <div class="col-sm-4">
                  <button type="button" class="btn btn-primary" onClick={this.search}>Search!</button>
              </div>
            </div>
            </div>
          </div>
        );
    }
}

export default SearchPage
