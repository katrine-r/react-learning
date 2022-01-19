import React from 'react'
import './styles.css'
import Button from '../UI/Button'

const ListItem = ({ id, num, title, body, removeHandle }) => {

    return (
        <li className='list-item'>
          <span className='list-item-wrapper'>
            <span>{id}. {title}</span>
            <span>{body}</span>
          </span>
          <Button onClick={() => removeHandle(id)} >remove</Button>
        </li>
    )
}

export default ListItem