import React from "react";
import Card from "./Card";
import { TaskProps } from '../interfaces/TaskProps';

type Props = {
    showDetails: any,
    tasks: Array<TaskProps>
}

const Tasks = ({showDetails, tasks} : Props) => {
    const tasksToShow = tasks;

    return (
        <div>
            {tasksToShow.map((task) => (
                        <Card
                            showDetails={(id: string) => showDetails(id)}
                            name={task.name}
                            created={task.created}
                            priority={task.priority}
                            marks={task.marks}
                            id={String(task.id)}
                            key={task.id}
                        />
                    ))}
        </div>
    )
}

export default Tasks;