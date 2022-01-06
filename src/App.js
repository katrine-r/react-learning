import { useState } from 'react';
import './App.css';
import List from './component/List';
import Button from './component/UI/Button';
import Input from './component/UI/Input';
import Form from './component/Form';
import Modal from './component/Modal';
import { PostsService } from './api/PostsService';

function App() {

  const [data1, setData1] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('title')
  const [filter, setFilter] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = ev => {
    ev.preventDefault()
    const obj = { id:Date.now(), title, text }
    setData1([...data1, obj])
    setTitle('')
    setText('')
    setIsActive(false)
  }

  const removeHandle = id => {
    setData1(data1.filter(i => i.id !== id))

  }

  const selectData = ev => {
    console.log('render')
    setSelected(ev.target.value)
    setData1([...data1.sort((a, b) => a[selected].localeCompare(b[selected]))])
    // return [...data1.sort((a, b) => a[selected].localeCompare(b[selected]))]
  }

  // const sortedPosts = selectData()

  // const filteredAndSortedPosts = sortedPosts.filter(i => i.title === filter)

  const getPosts = async () => {
    const posts = await PostsService.getPosts()
    console.log(`posts`, posts)
  }

  return (
    <div className="App">
      <Button onClick={() => setIsActive(true)}>Add post</Button>
      <Modal 
        isActive={isActive}
        setIsActive={setIsActive}
      >
        <Form 
          handleSubmit={handleSubmit}
          setTitle={setTitle}
          setText={setText}
          title={title}
          text={text}
        />
      </Modal>
      
      <hr />
      <Input 
        type='text'
        name='filter'
        placeholder='Фильтр'
        value={filter}
        onChange={ev => setFilter(ev.target.value)}
      />

      <select value={selected} onChange={selectData} >
        <option value={'title'} >По названию</option>
        <option value={'text'} >По содержимому</option>
      </select>

      { data1?.length 
      ? <List data={data1} removeHandle={removeHandle} />
      : <h1 style={{textAlign: 'center', color: '#222'}}>Список пуст</h1>
      }
      
      <Button onClick={getPosts}>Get posts</Button>

    </div>
  );
}

export default App;
