import React from 'react'
import './styles.css'
import Button from '../UI/Button'

const ListItem = ({id, num, title, text, removeHandle}) => {

    return (
        <li className='list-item'>
          <span className='list-item-wrapper'>
            <span>{num}. {title}</span>
            <span>{text}</span>
          </span>
          <Button onClick={() => removeHandle(id)} >remove</Button>
        </li>
    )
}

export default ListItem