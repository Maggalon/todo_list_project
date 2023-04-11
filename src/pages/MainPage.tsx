import Sorting from '../components/Sorting';
import Priorities from '../components/Priorities';
import Marks from '../components/Marks';
import Card from '../components/Card';
import React, { useState } from 'react';

interface TaskProps {
    id: number;
    name: string;
    created: string;
    priority: string;
    marks: Array<string>;
    description: string;
}

type Props = {
    tasks: Array<TaskProps>;
    addTask: any;
    showDetails: any;
};

const MainPage = (props: Props) => {
    const tasks = props.tasks;

    const [designChecked, setDesignChecked] = useState(true);
    const [developmentChecked, setDevelopmentChecked] = useState(true);
    const [researchChecked, setResearchChecked] = useState(true);
    const [lowChecked, setLowChecked] = useState(true);
    const [normalChecked, setNormalChecked] = useState(true);
    const [highChecked, setHighChecked] = useState(true);
    const [option, setOption] = useState('new');
    const [tasksToShow, setTasksToShow] = useState(tasks);

    const arrayUnique = (array: any) => {
        const a = array.concat();
        for (let i = 0; i < a.length; ++i) {
            for (let j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j]) a.splice(j--, 1);
            }
        }

        return a.sort((a: TaskProps, b: TaskProps) => a.id - b.id);
    };

    const handleMarksChange = (
        designChecked: boolean,
        developmentChecked: boolean,
        researchChecked: boolean,
        lowChecked: boolean,
        normalChecked: boolean,
        highChecked: boolean,
    ) => {
        const designTasks = designChecked ? tasks.filter((task: TaskProps) => task.marks.includes('design')) : [];
        const developmentTasks = developmentChecked
            ? tasks.filter((task: TaskProps) => task.marks.includes('development'))
            : [];
        const researchTasks = researchChecked ? tasks.filter((task: TaskProps) => task.marks.includes('research')) : [];

        let tempTasks = arrayUnique([...designTasks, ...developmentTasks, ...researchTasks]);

        tempTasks = lowChecked ? tempTasks : tempTasks.filter((task: TaskProps) => task.priority !== 'low');
        tempTasks = normalChecked ? tempTasks : tempTasks.filter((task: TaskProps) => task.priority !== 'normal');
        tempTasks = highChecked ? tempTasks : tempTasks.filter((task: TaskProps) => task.priority !== 'high');

        return tempTasks;
    };

    const handleDesignChange = () => {
        const checked = !designChecked;
        setDesignChecked(checked);
        setTasksToShow(
            handleMarksChange(checked, developmentChecked, researchChecked, lowChecked, normalChecked, highChecked),
        );
    };

    const handleDevelopmentChange = () => {
        const checked = !developmentChecked;
        setDevelopmentChecked(checked);
        setTasksToShow(
            handleMarksChange(designChecked, checked, researchChecked, lowChecked, normalChecked, highChecked),
        );
    };

    const handleResearchChange = () => {
        const checked = !researchChecked;
        setResearchChecked(checked);
        setTasksToShow(
            handleMarksChange(designChecked, developmentChecked, checked, lowChecked, normalChecked, highChecked),
        );
    };

    const handleLowChange = () => {
        const checked = !lowChecked;
        setLowChecked(checked);
        setTasksToShow(
            handleMarksChange(designChecked, developmentChecked, researchChecked, checked, normalChecked, highChecked),
        );
    };

    const handleNormalChange = () => {
        const checked = !normalChecked;
        setNormalChecked(checked);
        setTasksToShow(
            handleMarksChange(designChecked, developmentChecked, researchChecked, lowChecked, checked, highChecked),
        );
    };

    const handleHighChange = () => {
        const checked = !highChecked;
        setHighChecked(checked);
        setTasksToShow(
            handleMarksChange(designChecked, developmentChecked, researchChecked, lowChecked, normalChecked, checked),
        );
    };

    const handleOptionChange = (event: Event) => {
        setOption((event.target as any).value);
    };

    return (
        <div>
            <button onClick={props.addTask}>Добавить задачу</button>
            <Sorting option={option} handleOptionChange={handleOptionChange} />
            <Priorities
                lowChecked={lowChecked}
                handleLowChange={handleLowChange}
                normalChecked={normalChecked}
                handleNormalChange={handleNormalChange}
                highChecked={highChecked}
                handleHighChange={handleHighChange}
            />
            <Marks
                designChecked={designChecked}
                handleDesignChange={handleDesignChange}
                developmentChecked={developmentChecked}
                handleDevelopmentChange={handleDevelopmentChange}
                researchChecked={researchChecked}
                handleResearchChange={handleResearchChange}
            />
            {tasksToShow.map((task) => (
                <Card
                    showDetails={(id: string) => props.showDetails(id)}
                    name={task.name}
                    created={task.created}
                    priority={task.priority}
                    marks={task.marks}
                    id={String(task.id)}
                    key={task.id}
                />
            ))}
        </div>
    );
};

export default MainPage;
