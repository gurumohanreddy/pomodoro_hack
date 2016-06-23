import React,{ Component } from 'react';



export default class AddTask extends Component {
  constructor(props){
    super(props);

    this.state={term:''};

    this.onInputChange = this.onInputChange.bind(this);

  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
      event.prevent.Default();
  }


  render(){
    return(
      		    <form onsubmit={this.onFormSubmit} className='input-group'>
              <input
              placeholder='Add a task....'
              className='form-control'
              value={this.state.term}
              onChange={this.onInputChange}/>
              <span className='input-group-btn'>
              <button className='btn btn-info' type='button'>Submit</button>
              </span>
      		    </form>

    );
  }
}
