import Sorting from '../components/Sorting';
import Priorities from '../components/Priorities';
import Marks from '../components/Marks';
// import Card from '../components/Card';
// import Tasks from '../components/Tasks';
import React, { useState, lazy, Suspense } from 'react';
import InfiniteScroll from 'react-infinite-scroller'
import "../style/main.css"
import { TaskProps } from '../interfaces/TaskProps';

type Props = {
    tasks: Array<TaskProps>;
    addTask: any;
    showDetails: any;
};

const Tasks = lazy(() => import('../components/Tasks'))

const MainPage = (props: Props) => {
    const tasks = props.tasks.filter(task => task.id <= 15);
    let c = 16;

    const [designChecked, setDesignChecked] = useState(true);
    const [developmentChecked, setDevelopmentChecked] = useState(true);
    const [researchChecked, setResearchChecked] = useState(true);
    const [lowChecked, setLowChecked] = useState(true);
    const [normalChecked, setNormalChecked] = useState(true);
    const [highChecked, setHighChecked] = useState(true);
    const [option, setOption] = useState('new');
    const [tasksToShow, setTasksToShow] = useState(tasks);
    const [hasMore, setHasMore] = useState(true)

    const loading = async () => {
        let newTasks = []
        if (c + 15 > props.tasks.length) {
            newTasks = props.tasks.filter(task => task.id >= c)
            setHasMore(false)
        } else {
            newTasks = props.tasks.filter(task => task.id <= c + 15)
        }
        await setTasksToShow([...tasksToShow, ...newTasks])
    }

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
        <div className='base'>
            <div className='sidebar'>
                <div className='square'>
                    <div className='filter-block'>
                        <Sorting option={option} handleOptionChange={handleOptionChange} />
                    </div>
                </div>
                <div className='square'>
                    <div className='filter-block'>
                        <Priorities
                            lowChecked={lowChecked}
                            handleLowChange={handleLowChange}
                            normalChecked={normalChecked}
                            handleNormalChange={handleNormalChange}
                            highChecked={highChecked}
                            handleHighChange={handleHighChange}
                        />
                    </div>
                    <div className='filter-block'>
                        <Marks
                            designChecked={designChecked}
                            handleDesignChange={handleDesignChange}
                            developmentChecked={developmentChecked}
                            handleDevelopmentChange={handleDevelopmentChange}
                            researchChecked={researchChecked}
                            handleResearchChange={handleResearchChange}
                        />
                    </div>
                </div>
            </div>
            <div className='main'>
                <button className='button' onClick={props.addTask}>Добавить задачу</button>
                {/* {tasksToShow.map((task) => (
                    <Card
                        showDetails={(id: string) => props.showDetails(id)}
                        name={task.name}
                        created={task.created}
                        priority={task.priority}
                        marks={task.marks}
                        id={String(task.id)}
                        key={task.id}
                    />
                ))} */}
                <Suspense fallback={<div>Loading...</div>}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={loading}
                        hasMore={hasMore}
                        loader={<div key={0}>Loading...</div>}>
                        <Tasks tasks={tasksToShow} showDetails={(id: string) => props.showDetails(id)} />
                    </InfiniteScroll>    
                </Suspense>
            </div>
        </div>
    );
};

export default MainPage;
