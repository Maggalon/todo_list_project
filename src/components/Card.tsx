import React from "react";

type Props = {
    showDetails: any,
    created: string,
    priority: string,
    marks: Array<string>,
    id: string,
    name: string,
}

const Card = ({showDetails, created, priority, marks, id, name} : Props) => {
    return (
        <div>
            <h3 id={id} onClick={(e) => showDetails(Number((e.target as HTMLElement).id))}>{name}</h3>
            <p>Создано: {created}</p>
            <p>Приоритет: {priority}</p>
            <p>Отметки: {marks.join(', ')}</p>
        </div>
    )
}

export default Card;