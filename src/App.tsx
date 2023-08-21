import React from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import TaskContainer from './components/TaskContainer';
import './App.css';


const App: React.FC = () => {

  return (
    <TaskProvider>
      <TaskContainer />
    </TaskProvider>
  )
}

export default App;
