import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handlechange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
        
    };
  return (
    <form className = "todo-form" 
    onSubmit={handleSubmit}> 
    <input type='text' 
    placeholder='Add a Todo' 
    value={input} 
    name='text' 
    lassName='todo-input' 
    onChange={handlechange}
    ref={inputRef}
    className='todo-input edit'
    />

    <button className='todo-button'>Add Todo</button>

    </form>
  )
}

export default TodoForm
