import React, { useState } from 'react'
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo() {
    const [tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask])
        event.target.task.value = '';
    }

    return (
        <>
            <h1 className='text-center text-primary pt-2'><u>Add Something To Your To-Do List!</u></h1>
            <ToDoForm handleFormSubmit={handleFormSubmit} />
            <div className="row">
                {tasks.map((task, index) => <ToDoCard task={task} key={index} />)}
            </div>
        </>
    )
}