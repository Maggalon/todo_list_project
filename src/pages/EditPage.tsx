import React, { useState } from 'react';
import "../style/editing.css"

interface TaskProps {
    id: number;
    name: string;
    created: string;
    priority: string;
    marks: Array<string>;
    description: string;
}

type Props = {
    curTask: TaskProps;
    numOfTasks: number;
    goBack: any;
    addTask: any;
};

const EditPage = ({ curTask, numOfTasks, goBack, addTask }: Props) => {
    const [name, setName] = useState(curTask.name);
    const [priority, setPriority] = useState(curTask.priority);
    const [designChecked, setDesignChecked] = useState(curTask.marks.includes('design'));
    const [developmentChecked, setDevelopmentChecked] = useState(curTask.marks.includes('development'));
    const [researchChecked, setResearchChecked] = useState(curTask.marks.includes('research'));
    const [description, setDescription] = useState(curTask.description);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const marks: string[] = [];
        const newTask = {
            id: curTask.id === 0 ? numOfTasks + 1 : curTask.id,
            name: name,
            created: curTask.created === '' ? 'now' : curTask.created,
            priority: priority,
            marks: marks,
            description: description,
        };
        if (designChecked) newTask.marks.push('design');
        if (developmentChecked) newTask.marks.push('development');
        if (researchChecked) newTask.marks.push('research');

        return newTask;
    };

    return (
        <div className='editing-container'>
            <button className='back-button1' onClick={goBack}>Назад</button>
            <div className='soder-container'>
                <form onSubmit={(e) => addTask(handleSubmit(e))}>
                    <label>
                        <div className='button-edit'>Название задачи</div>
                        <br />
                        <input 
                            className="name-task1"
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </label>
                    <br />
                    <label>
                        <div className='button-edit'>Приоритет</div>
                        <br />
                        <select className='prioriti-select' value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="low">low</option>
                            <option value="normal">normal</option>
                            <option value="high">high</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        <div className='button-edit'>Отметки</div>
                        <br />
                        <div className='otm-container_'>
                        <label>
                            <input
                                className='marks_'
                                type="checkbox"
                                name="marks"
                                checked={designChecked}
                                onChange={() => setDesignChecked(!designChecked)}
                            />
                            <p>Design</p>
                        </label>
                        <label>
                            <input
                                className='marks_'
                                type="checkbox"
                                name="marks"
                                checked={developmentChecked}
                                onChange={() => setDevelopmentChecked(!developmentChecked)}
                            />
                            <p>Development</p>
                        </label>
                        <label>
                            <input
                                className='marks_'
                                type="checkbox"
                                name="marks"
                                checked={researchChecked}
                                onChange={() => setResearchChecked(!researchChecked)}
                            />
                            <p>Research</p>
                        </label>
                        </div>
                    </label>
                    <label>
                        <div className='button-edit'>Описание</div>
                        <br />
                        <textarea
                            className='table_'
                            rows={10}
                            cols={45}
                            maxLength={1000}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <br />
                    <input 
                        className='save-button'
                        type="submit" 
                        value="Сохранить" 
                    />
                </form>
            </div>
        </div>
    );
};

export default EditPage;
