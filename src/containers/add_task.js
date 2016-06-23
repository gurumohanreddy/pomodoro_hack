import React,{ Component } from 'react';

import TaskList from './task_list';

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
      <div className="container">
      	<div className="row">
      	    <div className="col-md-6">
              <br/>
      		    <form name="checkListForm">
              <input
              placeholder='Add a task'
              className='form-control'
              value={this.state.term}
              onChange={this.onInputChange}/>
      		    </form>
      	    	 <button className='btn btn-info' onClick={this.onsubmit}>Submit</button>
      		    <br/><br/>
      		    <div className="list"></div>
              <TaskList />
              </div>
              </div>
      	</div>
    );
  }
}
