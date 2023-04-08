const Card = (props) => {
    return (
        <div>
            <h3 id={props.id} onClick={(e) => props.showDetails(Number(e.target.id))}>{props.name}</h3>
            <p>Создано: {props.created}</p>
            <p>Приоритет: {props.priority}</p>
            <p>Отметки: {props.marks.join(', ')}</p>
        </div>
    )
}

export default Card;