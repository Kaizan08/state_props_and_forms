import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

class PlayList extends Component {
    constructor(props){
        super(props);
        this.state={
            songs: []
        }
    }
    componentDidMount(){
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
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
      <div className="">
          <input type="button" onClick={this.state.updatePlayList} value="Update"/>
          <PlayListItem songs={this.state.songs}/>
      </div>
      )
  }
}
export default PlayList;