import MainPage from './pages/MainPage';
import Details from './pages/Details';
import EditPage from './pages/EditPage';
import React, { useState } from 'react';

interface TaskProps {
    id: number;
    name: string;
    created: string;
    priority: string;
    marks: Array<string>;
    description: string;
}

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Тестовая задача №1',
            created: 'только что',
            priority: 'normal',
            marks: ['design', 'development'],
            description: '',
        },
        {
            id: 2,
            name: 'Тестовая задача №2',
            created: '5 минут назад',
            priority: 'high',
            marks: ['design'],
            description: '',
        },
        {
            id: 3,
            name: 'Тестовая задача №3',
            created: '9 часов назад',
            priority: 'high',
            marks: ['research'],
            description: '',
        },
        {
            id: 4,
            name: 'Тестовая задача №4',
            created: '20 октября 2020, 16:25',
            priority: 'normal',
            marks: ['design', 'development', 'research'],
            description: '',
        },
    ]);
    const [page, setPage] = useState('main');
    const [taskID, setTaskID] = useState(0);
    const [addNew, setAddNew] = useState(true);

    const editTasks = (task: TaskProps) => {
        const tempTasks = tasks;
        for (let i = 0; i < tempTasks.length; i++) {
            if (task.id === tempTasks[i].id) {
                tempTasks[i].name = task.name;
                tempTasks[i].created = task.created;
                tempTasks[i].priority = task.priority;
                tempTasks[i].marks = task.marks;
                tempTasks[i].description = task.description;
            }
        }
        return tempTasks;
    };

    if (page === 'main') {
        return (
            <MainPage
                tasks={tasks}
                showDetails={(id: React.SetStateAction<number>) => {
                    setTaskID(id);
                    setPage('details');
                    setAddNew(false);
                }}
                addTask={() => setPage('edit')}
            />
        );
    } else if (page === 'details') {
        return (
            <Details
                task={tasks.filter((task) => task.id === taskID)[0]}
                goBack={() => {
                    setPage('main');
                    setAddNew(true);
                }}
                deleteTask={(id: number) => {
                    setTasks(tasks.filter((task) => task.id !== id));
                    setPage('main');
                    setAddNew(true);
                }}
                editTask={() => setPage('edit')}
            />
        );
    } else if (page === 'edit' && addNew) {
        return (
            <EditPage
                numOfTasks={tasks.length}
                addTask={(task: TaskProps) => {
                    setTasks(tasks.concat(task));
                    setPage('main');
                }}
                goBack={() => {
                    setPage('main');
                    setAddNew(true);
                }}
                curTask={{
                    id: 0,
                    name: '',
                    created: '',
                    priority: 'low',
                    marks: [],
                    description: '',
                }}
            />
        );
    } else if (page === 'edit' && !addNew) {
        return (
            <EditPage
                numOfTasks={tasks.length}
                addTask={(task: TaskProps) => {
                    setTasks(editTasks(task));
                    setPage('details');
                }}
                goBack={() => {
                    setPage('details');
                    //setAddNew(true)
                }}
                curTask={tasks.filter((task) => task.id === taskID)[0]}
            />
        );
    } else {
        return <div>Nothing to show here</div>;
    }
};

export default App;
