import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

class PlayList extends Component {
    constructor(props){
        super(props);
        this.state={
            songs: []
        }
        this.updatePlayList = this.updatePlayList.bind(this);
    }
    updatePlayList(e) {
        e.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
        }).then(data => {
        this.setState({songs: data});
        })
    }

  render() {
      return(
      <div className="playlist">
          <input type="button" id="update_btn" onClick={this.updatePlayList} value="Update List"/>
          <PlayListItem songs={this.state.songs}/>
      </div>
      )
  }
}
export default PlayList;