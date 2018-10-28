import React, { Component } from 'react';
import { Dialog, Button, DialogTitle, DialogContent, DialogActions } from 'react-mdl';
import './AddActivity.css';
import SimpleMap from './simplemap';

class AddActivity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aName: '',
      aDetails: '',
      aLocation: '',
      aTags: '',
      isLocation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  search = () => {
    this.addActivity();
  }

  addActivity() {


    if (this.state.aName !== "" && this.state.aName !== null) {
      const tagArr = this.state.aTags.split(" ");
      const submit = {
        name: this.state.aName,
        description: this.state.aDetails,
        tags: [tagArr],


      };

      for (let i = 0; i < tagArr.length; i++) {
        submit.tags.tag = tagArr[i]
      }

      const URL = "localhost:8080/addActivity";
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

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
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
                <div>
                  <p id="activityNameLabel">
                    Activity Name:
                          <div class="form-group">
                      <input type="text" class="form-control" id="activityName" name="aName" placeholder="activity name" value={this.state.aName} onChange={this.handleChange} />
                      Activity Details:
                              <input type="text" class="form-control" id="activityDetails" name="aDetails" placeholder="activity details" value={this.state.aDetails} onChange={this.handleChange} />
                      Location:
                              <input type="text" class="form-control" id="activityLocation" name="aLocation" placeholder="location" value={this.state.aLocation} onChange={this.handleChange} />
                      Tags:
                              <input type="text" class="form-control" id="activityTags" name="aTags" placeholder="tags" value={this.state.aTags} onChange={this.handleChange} />
                      <div>
                        <Button colored onClick={this.handleOpenDialog} type="button" raised ripple>Map Location</Button>
                        <Dialog open={this.state.openDialog}>
                          <SimpleMap />
                          <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                        </Dialog>
                      </div>
                    </div>
                  </p>
                </div>
                <div>
                  <button type="button" class="btn btn-primary" onClick={this.search}>Add!</button>
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
