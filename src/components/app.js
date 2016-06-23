import React, { Component } from 'react';
import AddTask from '../containers/add_task';
import TaskList from '../containers/task_list';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <br/>
        <div className='col-md-12'>
          <AddTask />
          <br />
          <TaskList />
        </div>
      </div>
    );
  }
}
