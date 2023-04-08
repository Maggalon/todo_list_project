const Details = ({task, goBack}) => {
    return (
        <div>
            <button onClick={goBack}>Назад</button>
            <button>Редактировать</button>
            <button>Удалить</button>
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