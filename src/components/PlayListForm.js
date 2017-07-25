import React, { Component } from 'react';


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

  render() {
      return(
      <div className="form">
          <form onSubmit={this.addToList}>
              <label for="userName">User Name:</label><br/>
              <input type="text" name="userName" placeholder="Name or User Name"/><br/>
              <label for="songArtist">Artist/Band:</label><br/>
              <input type="text" name="songArtist" placeholder="Artist or Band Name"/><br/>
              <label for="songTitle">Song Title:</label><br/>
              <input type="text" name="songTitle" placeholder="Song Title"/><br/>
              <label for="songNotes">Notes about Song:</label><br/>
              <textarea name="songNotes"></textarea><br/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
}
export default PlayListForm;