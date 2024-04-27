import { useState } from 'react';
import React from 'react';
import './Form.css';

export default function Form() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <div className='container'>
            <img className='logo' src="./src/noteicon.png" alt="Logo" /> <br />
            <input className="input" type="text" value={task} onChange={(e) => setTask(e.target.value)} /> <br />
            <button className="btn" onClick={addTask}>ADD</button>
            {tasks.map((t, index) => (
                <p key={index}>{t}</p>
            ))}
        </div>
    )
}
