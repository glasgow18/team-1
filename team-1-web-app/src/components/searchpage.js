import React, { Component } from 'react';
import Activity from './activity.js';

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




  // search = () => {
  //   const query = (this.state.inputValue);
  //   alert('input: ' + query);
  //   const userAction = async () => {
  //     alert("HERE");
  //     fetch('http://example.com/movies.json')
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (myJson) {
  //         console.log(JSON.stringify(myJson));
  //       });
  //     let str = '<ul>';
  //     for (var key in myJson) {
  //       // skip loop if the property is from prototype
  //       if (!myJson.hasOwnProperty(key)) continue;
  //       var obj = myJson[key];
  //       alert(obj);
  //       str +
  //       for (var prop in obj) {
  //         // skip loop if the property is from prototype
  //         if (!obj.hasOwnProperty(prop)) continue;
  //         alert(prop + " = " + obj[prop]);
  //       }
  //     }
  //   }
  // }

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
        <div>
          <div className="jumbotron">
            <h2>Enter a search</h2>
            <p className="lead">Something like nature sounds...</p>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. Sound" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
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
