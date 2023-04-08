import { useState } from "react";


const EditPage = (props) => {

    const [name, setName] = useState(props.curTask.name)
    const [priority, setPriority] = useState(props.curTask.priority)
    const [designChecked, setDesignChecked] = useState(props.curTask.marks.includes('design'))
    const [developmentChecked, setDevelopmentChecked] = useState(props.curTask.marks.includes('development'))
    const [researchChecked, setResearchChecked] = useState(props.curTask.marks.includes('research'))
    const [descriprion, setDescription] = useState(props.curTask.descriprion)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            id: props.curTask.id === 0 ? props.numOfTasks + 1 : props.curTask.id,
            name: name,
            created: props.curTask.created === '' ? 'now' : props.curTask.created,
            priority: priority,
            marks: [],
            descriprion: descriprion
        }
        if (designChecked) newTask.marks.push('design')
        if (developmentChecked) newTask.marks.push('development')
        if (researchChecked) newTask.marks.push('research')

        return newTask
    }

    return (
        <div>
            <button onClick={props.goBack}>Назад</button>
            <div>
                <form onSubmit={(e) => props.addTask(handleSubmit(e))}>
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
                    <textarea rows={10} cols={45} value={descriprion} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <br />
                    <input type="submit" value="Сохранить" />
                </form>
            </div>
        </div>
    )
}

export default EditPage;