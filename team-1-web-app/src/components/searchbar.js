import React, {Component} from 'react';
import './searchpage.css';
class SearchBar extends Component{
  constructor(props){
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

  search = () =>{
    const query = (this.state.inputValue);
    alert('input: '+query);
    const userAction = async () => {
        const response = await fetch('http://localhost:8080/search?searchTerm='+query);
        const myJson = await response.json();
  }
}


    render(){

        return (<div>
          <div className="row">
            <div class="col-sm-2"></div>
              <div class="col-sm-8">
          <div className="jumbotron">
          <h2 className="text-center">Enter a search</h2>
          <p className="lead text-center">Something like nature sounds...</p>
          </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">

          <div className="col-sm-12">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg. Sound" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                 </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

          </div>
        </div>
      </div>
        );
    }
}





export default SearchBar
