import React,{ Component } from 'react';

export default class AddTask extends Component {
  render(){
    return(
      <div className='input-group'>
      <input />
      <span className='input-group btn'>
        <button type='submit' className='btn btn-secondary'>Submit</button>
      </span>
      </div>
    )
  }
}