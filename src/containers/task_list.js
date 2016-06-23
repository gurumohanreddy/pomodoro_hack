import React,{ Component } from 'react';
import { connect } from 'react-redux';

class TaskList extends Component {

  renderList(){
    return this.props.lists.map((list)=>{
      return (
        <li
        key={list.task}
        className='list-group-item'>{list.task}</li>
      );
    })
  }

  render(){
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    lists: state.lists
  };
}

export default connect(mapStateToProps)(TaskList);
