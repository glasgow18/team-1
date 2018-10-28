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




  search = () => {
    const query = (this.state.inputValue);
    alert('input: ' + query);
    const userAction = async () => {
      const response = await fetch('http://localhost:8080/search?searchTerm=' + query);
      const myJson = await response.json();
      let str = '<ul>';
      for (var key in myJson) {
        // skip loop if the property is from prototype
        if (!myJson.hasOwnProperty(key)) continue;
        var obj = myJson[key];
        console.log(obj);
        str +=
          <li><div className="row">
            <div className="col-sm-12">
              <div className="col-sm-12">
                <div className="card ">
                  <div className="card-body">
                    <div className="jumbotron">
                      <div className="row">
                        <div className="col-sm-6"><img src={this.state.image} width="90%" height="90%" /></div>
                        <div className="col-sm-4"><h3>{obj.Name}</h3></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <p className="lead">{obj.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </li>
        for (var prop in obj) {
          // skip loop if the property is from prototype
          if (!obj.hasOwnProperty(prop)) continue;
          // alert(prop + " = " + obj[prop]);
        }
      }
    }
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
              <button type="button" class="btn btn-primary" onClick={this.search}>Search!</button>
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
