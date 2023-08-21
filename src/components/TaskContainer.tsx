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
        <div style={{ padding: 20 }}>
            <h2>Simple Task Manager</h2>
            <p>This is a mini-task manager in React TypeScript. It uses a custom hook called useLocalStorage which provides an abstractsion of the browser's local storage, allowing the app to persistently store tasks.</p>
            <p>It also ensures the tasks are retained even if the user refreshes or closes the browser.</p>
            <p>I'm also using React's Context API in combination with the useReducer hook, as a simple and structured way to manage global state and perform actions for adding and deleting tasks.</p>
            <p>This simple app also separates presentation from business logic and state management, which promotes maintainability and scalability.</p>
            <input
                type='text'
                placeholder='Add a new task...'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                />&nbsp;
            <button onClick={addTask}>Add New Task</button>
            <section style={{ padding: 20 }}>
                <TaskList tasks={tasks} onDelete={deleteTask} />
            </section>
        </div>
    )
  }
  
  export default TaskContainer;