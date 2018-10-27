import React, {Component} from 'react';
import './searchpage.css';
import Activity from './activity.js';
class SearchResults extends Component{
    render(){
        return (
          <div class="row">
              <div class="col-sm-12">
                 <div class="card">
                     <div class="card-body">
                         This is a card
                     </div>
                 </div>
                 <div class="card">
                      <div class="card-body">
                          This is a card
                      </div>
                  </div>
                  <div class="card">
                          <div class="card-body">
                              This is a card
                          </div>
                      </div>
              </div>
              <Activity/>
          </div>
        );
    }
}

export default SearchResults
