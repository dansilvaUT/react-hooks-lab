import { useState } from 'react';

const AddTodo = props => {
    const [todo, setInput] = useState('');

    const handleTodo = () => {
        props.addTodo(todo);
        setInput('');
    }
    return (
        <section>
            <input type='text' onChange={e => setInput(e.target.value)} value={todo} />
            <button onClick={() => handleTodo(todo)}>Submit</button>

        </section>
    )
}

export default AddTodo;