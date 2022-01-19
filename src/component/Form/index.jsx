import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

const Form = ({ handleSubmit, setTitle, setText, title, text }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input 
                name='title' 
                placeholder='enter title' 
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <Input
                name='text' 
                placeholder='enter text' 
                value={text}
                onChange={ev => setText(ev.target.value)}
            />
            <Button>click me</Button>
        </form>
    )
}

export default Form
