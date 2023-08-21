import React from 'react';

type TaskProps = {
    task: string;
    onDelete: (task: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => (
    <div>
        {task}
        <button onClick={() => onDelete(task)}>Delete</button>
    </div>
)

export default Task;