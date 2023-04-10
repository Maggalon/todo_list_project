import React, { useState } from "react";

interface TaskProps {
    id: number,
    name: string,
    created: string,
    priority: string,
    marks: Array<string>,
    description: string
}

type Props = {
    curTask: TaskProps,
    numOfTasks: number,
    goBack: any,
    addTask: any,
}

const EditPage = ({curTask, numOfTasks, goBack, addTask} : Props) => {

    const [name, setName] = useState(curTask.name)
    const [priority, setPriority] = useState(curTask.priority)
    const [designChecked, setDesignChecked] = useState(curTask.marks.includes('design'))
    const [developmentChecked, setDevelopmentChecked] = useState(curTask.marks.includes('development'))
    const [researchChecked, setResearchChecked] = useState(curTask.marks.includes('research'))
    const [description, setDescription] = useState(curTask.description)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const marks : string[] = []
        const newTask = {
            id: curTask.id === 0 ? numOfTasks + 1 : curTask.id,
            name: name,
            created: curTask.created === '' ? 'now' : curTask.created,
            priority: priority,
            marks: marks,
            description: description
        }
        if (designChecked) newTask.marks.push('design')
        if (developmentChecked) newTask.marks.push('development')
        if (researchChecked) newTask.marks.push('research')

        return newTask
    }

    return (
        <div>
            <button onClick={goBack}>Назад</button>
            <div>
                <form onSubmit={(e) => addTask(handleSubmit(e))}>
                    <label>
                    Название задачи<br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                    Приоритет<br />
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value='low'>low</option>
                        <option value='normal'>normal</option>
                        <option value='high'>high</option>
                    </select>
                    </label>
                    <br />
                    <label>
                    Отметки<br />
                        <label>
                            <input type="checkbox" name="marks" checked={designChecked} onChange={() => setDesignChecked(!designChecked)} />
                            Design
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="marks" checked={developmentChecked} onChange={() => setDevelopmentChecked(!developmentChecked)} />
                            Development
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="marks" checked={researchChecked} onChange={() => setResearchChecked(!researchChecked)} />
                            Research
                        </label>
                    </label>
                    <br />
                    <label>
                    Описание<br />
                    <textarea rows={10} cols={45} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <br />
                    <input type="submit" value="Сохранить" />
                </form>
            </div>
        </div>
    )
}

export default EditPage;