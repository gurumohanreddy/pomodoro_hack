import React,{ Component } from 'react';
import { connect } from 'react-redux';

export default class TaskDetail extends Component{
  render(){
    if (!this.props.list) {
      return <div>Select a Task to get started.</div>;
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>{this.props.list.task}</div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    list: state.activeList
  };
}


export default connect(mapStateToProps)(TaskDetail);
