import React, { Component } from 'react';
import AddTask from '../containers/add_task';
import TaskList from '../containers/task_list';
import TaskDetail from '../containers/task_detail';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <br/>
        <div className='row'>
          <div className='col-md-12'>
            <AddTask />
            <br />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5'>
            <TaskList />
          </div>
          <div className='col-md-6'>
            <TaskDetail />
          </div>
        </div>
      </div>
    );
  }
}
