import { useTasks } from '../context/TaskContext';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskList from './TaskList';

const TaskContainer: React.FC = () => {
    const { state, dispatch } = useTasks();
    const [tasks, setTasks] = useLocalStorage('tasks', state);
  
    const addTask = (task: string) => {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTasks([...tasks, task]);
    }
  
    const deleteTask = (task: string) => {
      dispatch({ type: 'DELETE_TASK', payload: task });
      setTasks(tasks.filter((t: any) => t !== task));
    }
  
    return (
        <div>
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    )
  }
  
  export default TaskContainer;