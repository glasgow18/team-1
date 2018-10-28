import React, {Component} from 'react';
import simpleMap from './simpleMap';
import Activity from './activity.js';

class ActivityPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            mapFlag: '',
            lat: '',
            long: '',
            comments: '',
            tags: ''
        };
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className = "container-fluid" >
                <div className = "Label">
                    <p className = "name" > this.state.name </p>
                </div>
                <div className = "Label">
                    <p className = "description" >this.state.description</p>
                </div>
                <div className = "map">
                    <simpleMap>
                </div>
                <div className = "comments">
                    <p className = "" >this.state.comments</p>
                </div>
                <div className = "tags">
                    <p className = "descriptionLabel" >this.state.tags</p>
                </div>
            </div>
    )
        ;
    }
}

export default ActivityPage
