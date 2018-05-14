import React, { Component } from 'react';

export default class Albums extends Component {
  render(){
    const { results } = this.props;
    return (
      <div>
        <h2>Album results for '{this.props.artist}'</h2>
        <ul className='albums-gallery'>
          {results.map((album, idx) => {
            let albumArt = album.artworkUrl100;
            let albumName = album.collectionName;
            let albumPage = album.collectionViewUrl;
            return (
              <div key={idx} className='album'>
                <a href={albumPage} target='_blank'>
                  <li>
                    <img
                      alt='album'
                      src={albumArt}
                      className='album-image'
                    />
                  </li>
                </a>
                <p className='album-info'>
                  {albumName}
                </p>              
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}