import React from 'react'
import './styles.css'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'

const ListItem = ({ id, num, title, body, removeHandle }) => {
  const navigate = useNavigate()

    return (
        <li className='list-item'>
          <span className='list-item-wrapper'>
            <span>{id}. {title}</span>
            <span>{body}</span>
          </span>
          <Button onClick={() => navigate(`/post/${id}`)} >More</Button>
          <Button onClick={() => removeHandle(id)} >remove</Button>
        </li>
    )
}

export default ListItem