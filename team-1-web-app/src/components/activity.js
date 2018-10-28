import React, {Component} from 'react';
import './searchpage.css';
class Activity extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: 'Activity Name',
        description: 'Activity description',
      image:'gnomechild.jpg',
      maplocation:'',
      lat:0,
      long:0,
      comments:'',
      id:'',
      tags:'',
    };
  }
    render(){
        return (
        <div className="col-sm-12">
        <div className="card ">
          <div className="card-body">
            <div className="jumbotron">
              <div className="row">
                <div className="col-sm-6"><img src={this.state.image} width="90%" height="90%"/></div>
                <div className="col-sm-4"><h3>{this.state.name}</h3></div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                <p className="lead">{this.state.description}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Activity
