import React from "react";
import Card from "./Card";

interface TaskProps {
    id: number;
    name: string;
    created: string;
    priority: string;
    marks: Array<string>;
    description: string;
}

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