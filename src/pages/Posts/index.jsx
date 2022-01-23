import { useState, useMemo, useEffect } from 'react';
import './../../App.css';
import List from './../../component/List';
import Button from './../../component/UI/Button';
import Input from './../../component/UI/Input';
import Form from './../../component/Form';
import Modal from './../../component/Modal';
import { PostsService } from './../../api/PostsService';
import Loader from './../../component/UI/Loader';
import { useFetching } from './../../hooks/useFetching';
import { getPageCount, getPagesArray } from './../../utils';
import classNames from 'classnames';


function Posts() {

  const [data1, setData1] = useState([])
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('')
  const [filter, setFilter] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(2)
  const [pages, setPages] = useState([])

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await PostsService.getPosts(limit, page)
    const posts = await response.json()
    console.log(`posts`, posts)
    const totalCount = response.headers.get("x-total-count")
    const pageCount = getPageCount(totalCount, limit)
    setPages(getPagesArray(pageCount))
    setData1(posts)
  })

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

  useEffect(() => {
      fetching()
  }, [page])

  return (
    <div className="App">
      {console.log("pages ", pages)}
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
      
      <ul className="pagination">
        {pages.map((i) => (
          <li
            key={i}
            className={classNames("pagination-item", { active: page === i })}
            onClick={() => setPage(i)}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
