import React, { Component } from 'react';
import '../styles/App.css';

class PlayListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            songNotes: '',
            songArtist: '',
            songTitle: ''
        }
        this.addToList = this.addToList.bind(this);
    }
    addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);
    console.log(listItem);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}
    handleUserName = (e) => {
        this.setState({userName: e.target.value});
    }
    handleSongNotes = (e) => {
        this.setState({songNotes: e.target.value});
    }
    handleSongArtist = (e) => {
        this.setState({songArtist: e.target.value});
    }
    handleSongTitle = (e) => {
        this.setState({songTitle: e.target.value});
    }
  render() {
      return(
      <div className="form">
          <form onSubmit={this.addToList}>
              <label htmlFor="userName">User Name:</label><br/>
              <input type="text" name="userName" onChange={this.handleUserName} placeholder="Name or User Name"/><br/>
              <label htmlFor="songArtist">Artist/Band:</label><br/>
              <input type="text" name="songArtist" onChange={this.handleSongArtist} placeholder="Artist or Band Name"/><br/>
              <label htmlFor="songTitle">Song Title:</label><br/>
              <input type="text" name="songTitle" onChange={this.handleSongTitle} placeholder="Song Title"/><br/>
              <label htmlFor="songNotes">Notes about Song:</label><br/>
              <textarea name="songNotes" onChange={this.handleSongNotes}></textarea><br/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
}
export default PlayListForm;