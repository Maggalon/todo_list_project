import React from 'react';

type Props = {
    showDetails: any;
    created: string;
    priority: string;
    marks: Array<string>;
    id: string;
    name: string;
};

const Card = ({ showDetails, created, priority, marks, id, name }: Props) => {
    return (
        <div className='card'>
            <h3 className='name' id={id} onClick={(e) => showDetails(Number((e.target as HTMLElement).id))}>
                {name}
            </h3>
            <p className='soder'>Создано: {created}</p>
            <p className='soder'>Приоритет: {priority}</p>
            <p className='soder'>Отметки: {marks.join(', ')}</p>
        </div>
    );
};

export default Card;
