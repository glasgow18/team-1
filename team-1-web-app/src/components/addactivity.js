import React, { Component } from 'react';
import Activity from './activity.js';
import './AddActivity.css';

class AddActivity extends Component {

  constructor(props){
    super(props);
    this.state = {
      aName:'',
      aDetails:'',
      aLocation:'',
      aTags:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  search = () =>{

    alert('name: '+this.state.aName);
    alert('details: '+this.state.aDetails);
    alert('location: '+this.state.aLocation);
    alert('tags: '+this.state.aTags);

    this.addActivity();
}

  addActivity(){
    alert('called');
    alert('1');

      // var aMapFlag = true
      // var aLat = 40;
      // var aLong = 20;
    alert('2');

      alert('aName: '+this.state.aName);
      alert('aDescription: '+this.state.aDetails);


      if (this.state.aName!=""){
          const submit = JSON.stringify({
              name: this.state.aName,
              description: this.state.aDetails,
              // mapFlag: aMapFlag,
              // lat: aLat,
              // long: aLong

          });

          const URL = "localhost:8080/addActivity";
          alert('3');
          fetch(URL, {
              method: "PUT",
              body: submit,
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then(response => response.json())
              .then(response => console.log('Success', JSON.stringify(response)))
              .catch(error => console.error('Errors:', error));
      }
  }



  render() {
    return (
      <div className="container-fluid add-activity-wrapper">
        <div className="row">
          <div className="col-sm-4">
            <div className="jumbotron">
              <h4>Add an Activity</h4>
              <p className="lead">Add some extra tings fam</p>

              <form id="addActivityForm" onsubmit={this.addActivity}>
                  <div id="addActivityHeader">
                      <h1>Add and Activity</h1>
                  </div>
                  <div>
                      <p id="activityNameLabel">
                          Activity Name:
                          <div class="form-group">
                              <input type="text" class="form-control" id="activityName" name="aName" placeholder="activity name" value={this.state.aName} onChange={this.handleChange}/>
                              Activity Details:
                              <input type="text" class="form-control" id="activityDetails" name="aDetails" placeholder="activity details" value={this.state.aDetails} onChange={this.handleChange}/>
                              Location:
                              <input type="text" class="form-control" id="activityLocation" name="aLocation" placeholder="location" value={this.state.aLocation} onChange={this.handleChange}/>
                              Tags:
                              <input type="text" class="form-control" id="activityTags" name="aTags" placeholder="tags" value={this.state.aTags} onChange={this.handleChange}/>
                          </div>
                      </p>

                  </div>
                  <div>
                    <button type="button" class="btn btn-primary" onClick={this.search}>Search!</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddActivity
