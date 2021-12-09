import { useState } from 'react';
import './App.css';
import List from './component/List';
import Button from './component/UI/Button';
import Input from './component/UI/Input';
import Form from './component/Form';

function App() {

  const [data1, setData1] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('title')

  const handleSubmit = ev => {
    ev.preventDefault()
    const obj = { id:Date.now(), title, text }
    setData1([...data1, obj])
    setTitle('')
    setText('')
  }

  const removeHandle = id => {
    setData1(data1.filter(i => i.id !== id))

  }

  const selectData = ev => {
    setSelected(ev.target.value)
    setData1([...data1.sort((a, b) => a[selected].localeCompare(b[selected]))])
  }

  return (
    <div className="App">

      <Form 
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setText={setText}
        title={title}
        text={text}
      />

      <select value={selected} onChange={selectData} >
        <option value={'title'} >По названию</option>
        <option value={'text'} >По содержимому</option>
      </select>

      { data1?.length ? <List data={data1} removeHandle={removeHandle} />
      : <h1 style={{textAlign: 'center', color: '#222'}}>Список пуст</h1>
      }
      
    </div>
  );
}

export default App;
