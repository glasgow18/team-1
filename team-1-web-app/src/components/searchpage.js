import React, { Component } from 'react';
import Activity from './activity.js';
import './searchpage.css';


class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  search = () => {
    const query = (this.state.inputValue);
    fetch('http://localhost:8080/search?searchTerm=' + query)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const obj = JSON.stringify(myJson)
        console.log(obj);
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
          <div className="jumbotron">
            <h4 className="text-center header">Enter a search</h4>
            <p className="lead text-center subheading">Something like nature sounds...</p>
          </div>
          </div>
          <div className="col-sm-2"></div>
          </div>
          <div className="container-fluid searchbar">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. Sound" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                </div>
              </form>
            </div>
            <div class="col-sm-2">
              <button type="button" class="btn moarButton" onClick={this.search}>Search!</button>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <Activity />
            <Activity />
            <Activity />
            <Activity />
          </div>
          <div className="col-sm-2"></div>
        </div>
        </div>

    );
  }
}

export default SearchPage
