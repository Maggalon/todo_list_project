import React from 'react';
import "../style/view.css";
import { TaskProps } from '../interfaces/TaskProps';

type Props = {
    task: TaskProps;
    goBack: any;
    deleteTask: any;
    editTask: any;
};

const Details = ({ task, goBack, deleteTask, editTask }: Props) => {
    return (
        <div className='details'>
            <div className='name-container'>
                <button className='back-button' onClick={goBack}>Назад</button>
                <button className='redct-button' onClick={editTask}>Редактировать</button>
                <button className='del-button' onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
            <div className='task-container'>
                <div>
                    <h3 className='name-task'>Название задачи</h3>
                    <p className='name-text'>{task.name}</p>
                </div>
                <div>
                    <h3 className='name-task'>Дата создания</h3>
                    <p className='name-text'>{task.created}</p>
                </div>
                <div>
                    <h3 className='name-task'>Приоритет</h3>
                    <p className='name-text'>{task.priority}</p>
                </div>
                <div>
                    <h3 className='name-task'>Отметки</h3>
                    <p className='name-text'>{task.marks.join(', ')}</p>
                </div>
                <div>
                    <h3 className='name-task'>Описание</h3>
                    <p className='name-text'>{task.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
