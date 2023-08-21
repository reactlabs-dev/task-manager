import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskList from './TaskList';

const TaskContainer: React.FC = () => {
    const { state, dispatch } = useTasks();
    const [tasks, setTasks] = useLocalStorage('tasks', state);
    const [newTask, setNewTask] = useState<string>('');
  
    const addTask = () => {
        if(newTask.trim() === '') {
            console.error('Please enter a task');
            return;
        }

        dispatch({ type: 'ADD_TASK', payload: newTask });
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
  
    const deleteTask = (task: string) => {
      dispatch({ type: 'DELETE_TASK', payload: task });
      setTasks(tasks.filter((t: any) => t !== task));
    }
  
    return (
        <div>
            <input
                type='text'
                placeholder='Add a new task...'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />
            <button onClick={addTask}>Add New Task</button>
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    )
  }
  
  export default TaskContainer;