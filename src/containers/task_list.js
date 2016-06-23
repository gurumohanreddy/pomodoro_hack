import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { SelectList } from '../actions/index';
import { bindActionCreators} from 'redux';

class TaskList extends Component {

  renderList(){
    return this.props.lists.map((list)=>{
      return (
        <li
        onClick={() => this.props.selectList(list)}
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectList:SelectList},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
