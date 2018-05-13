import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

export default class Search extends Component {
  render(){
    return(
      <div>
        <h1>iTunes Artist Search</h1>        
        <FormGroup className='form'>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='search for an artist...'
            />
            <InputGroup.Addon>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>        
      </div>
    )
  }
}