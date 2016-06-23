import React,{ Component } from 'react';

export default class AddTask extends Component {
  constructor(props){
    super(props);

    this.state={term:''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onsubmit = this.onsubmit.bind(this);

  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onsubmit(){
    
    console.log(this.state.term);
  }


  render(){
    return(
      <div className='input-group'>
      <input
      placeholder='Add a task'
      value={this.state.term}
      className='form-control'
      onChange={this.onInputChange}/>
      <span className='input-group btn'>
        <button type='submit' className='btn btn-secondary' onClick={this.onsubmit}>Submit</button>
      </span>
      </div>
    )
  }
}
