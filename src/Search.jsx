import React, { Component } from 'react';
import Albums from './Albums'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

export default class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      artist: null,
      results: []
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';

    this.setState({
      query: value
    });
  }

  submitRequest = (e) => {
    let artist = this.state.query;
    artist = artist.replace(/ /g, '+');

    const BASE_URL = 'https://itunes.apple.com/search?';
    let FETCH_URL = `${BASE_URL}term=${artist}&media=music&entity=album&attribute=artistTerm&limit=20&country=us`;

    fetch(FETCH_URL, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        const { results } = json;
        console.log(results);
        this.setState({
          results,
          artist: json.results[0].artistName,
          query: ''
        });
      })
  }

  render(){
    return(
      <div>
        <h1>iTunes Artist Search</h1>        
        <FormGroup className='form'>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='search for an artist...'
              value={this.state.query}
              onChange={this.handleChange}
              onKeyPress={e => {
                if(e.key === 'Enter'){
                  this.submitRequest();
                }
              }}
            />
            <InputGroup.Addon>
              <Glyphicon glyph='search' onClick={() => this.submitRequest()}></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ?
            <Albums
              artist={this.state.artist}
              results={this.state.results}
            />           
          : <div></div>
        }         
      </div>
    )
  }
}