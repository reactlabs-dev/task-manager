import React, { createContext, useContext, useReducer } from 'react';

type ActionType = {
    type: 'ADD_TASK' | 'DELETE_TASK';
    payload: string;
}

type StateType = string[];

const TaskReducer = (state: StateType, action: ActionType ) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter(task => task !== action.payload);
        default:
            return state;
    }
}

const TaskContext = createContext<any | undefined>(undefined);

interface TaskProvderProps {
    children: React.ReactNode
}

export const TaskProvider: React.FC<TaskProvderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, []);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider');
    }

    return context;
}