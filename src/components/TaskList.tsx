import React, { Suspense, lazy } from 'react';
const Task = lazy(() => import ('./Task'));

type TaskListProps = {
    tasks: string[];
    onDelete: (task: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => (
    <div>
        {
            tasks.map(task => (
                <Suspense fallback={<div>Loading ...</div>} key={task}>
                    <Task task={task} onDelete={onDelete} />
                </Suspense>
            ))
        }
    </div>
);

export default TaskList;