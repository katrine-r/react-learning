import { useState, useMemo, useEffect } from 'react';
import './App.css';
import List from './component/List';
import Button from './component/UI/Button';
import Input from './component/UI/Input';
import Form from './component/Form';
import Modal from './component/Modal';
import { PostsService } from './api/PostsService';
import Loader from './component/UI/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils';

function App() {

  const [data1, setData1] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('title')
  const [filter, setFilter] = useState('')
  const [isActive, setIsActive] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(2)
  const [totalCount, setTotalCount] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostsService.getPosts(limit, page)
    const posts = await response.json()
    console.log(`posts`, posts)
    setTotalCount(response.headers.get('x-total-count'))
    setPageCount(getPageCount(totalCount, limit))
    setData1(posts)
  })

  console.log(`totalCount`, totalCount)
  console.log(`pageCount`, pageCount)

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

  const sortedPosts = useMemo(() => {
    console.log('render')
    if (selected) {
      return [...data1.sort((a, b) => a[selected].localeCompare(b[selected]))]
    }
    return data1 
  }, [selected, data1])

  const filteredAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(i => i.title.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, sortedPosts])

  // const getPosts = async () => {
  //   const response = await PostsService.getPosts()
  //   const posts = await response.json()
  //   console.log(`posts`, posts)
  //   setData1(posts)
  // }

  useEffect(() => {
      fetching()

    // fetching()

    // setTimeout(() => {
      // getPosts()
      // setIsLoading(false)
    // }, 1000)
  }, [])

  // if (isLoading) {
  //   return <Loader />
  // }

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

      <select value={selected} onChange={ev => setSelected(ev.target.value)} >
        <option disabled value='' >Сортировка по</option>
        <option value={'title'} >По названию</option>
        <option value={'body'} >По содержимому</option>
      </select>

      { isLoading
          ? <div style={{textAlign: 'center'}}><Loader /></div>
          : data1?.length 
            ? <List data={filteredAndSortedPosts} removeHandle={removeHandle} />
            : <h1 style={{textAlign: 'center', color: '#222'}}>Список пуст</h1>
      }
      
      {/* <Button onClick={getPosts}>Get posts</Button> */}

    </div>
  );
}

export default App;
