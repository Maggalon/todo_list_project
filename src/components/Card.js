const Card = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Создано: {props.created}</p>
            <p>Приоритет: {props.priority}</p>
            <p>Отметки: {props.marks.join(', ')}</p>
        </div>
    )
}

export default Card;