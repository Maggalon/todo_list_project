import React from 'react'

interface TaskProps {
    id: number,
    name: string,
    created: string,
    priority: string,
    marks: Array<string>,
    description: string
}

type Props = {
    task: TaskProps,
    goBack: any,
    deleteTask: any,
    editTask: any
}

const Details = ({task, goBack, deleteTask, editTask} : Props) => {
    return (
        <div>
            <button onClick={goBack}>Назад</button>
            <button onClick={editTask}>Редактировать</button>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
            <div>
                <div>
                    <h3>Название задачи</h3>
                    <p>{task.name}</p>
                </div>
                <div>
                    <h3>Дата создания</h3>
                    <p>{task.created}</p>
                </div>
                <div>
                    <h3>Приоритет</h3>
                    <p>{task.priority}</p>
                </div>
                <div>
                    <h3>Отметки</h3>
                    <p>{task.marks.join(', ')}</p>
                </div>
                <div>
                    <h3>Описание</h3>
                    <p>{task.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;