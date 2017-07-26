import React, { Component } from 'react';

class PlayListItem extends Component {
  render() {
    let playList = this.props.songs.map(song => {
      return(
        <div className="playListItem" key={song._id}>
          User: <span className="field">{song.userName}</span><br/>
          Artist/Band: <span className="field">{song.songArtist}</span><br/>
          Title: <span className="field">{song.songTitle}</span><br/>
          Notes: <span className="field">{song.songNotes}</span><br/>
      </div>
      )

    })
      return(
        <div>
          {playList}
        </div>
      )
  }
}
export default PlayListItem;