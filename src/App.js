import { useState } from 'react';
import './App.css';
import List from './component/List';
import Button from './component/UI/Button';

function App() {

  const [data1, setData1] = useState([])

  

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    const obj = { id:Date.now(), title, text }
    setData1([...data1, obj])
    setTitle('')
    setText('')
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          placeholder='enter title' 
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />
        <input
          name='text' 
          placeholder='enter text' 
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        <Button>click me</Button>
      </form>

      <List title={'List title 1'} data={data1}> <Button>click me</Button> </List>
    </div>
  );
}

export default App;
