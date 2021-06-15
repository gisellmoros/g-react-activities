import React from 'react';
import './styles.css';

const ToDo = ({ todo, handleToggle }) => {
    // console.log('Todo object',todo)

    const handleClick = e => {
        e.preventDefault();
        handleToggle(e.target.id);
        console.log('Clicked')
    };

    return (
        <div onClick={handleClick}  name="todo" value={todo.id} id={todo.id} className={todo.complete ? 'todo strike' : 'todo'}>
            {todo.task}
        </div>
    );
};

export default ToDo;
