import React from 'react'
import './styles.css'

const ListItem = ({num, title, text}) => {

    // console.log(props)

    return (
        <li className='list-item'>
          <span className='list-item-wrapper'>
            <span>{num}. {title}</span>
            <span>{text}</span>
          </span>
        </li>
    )
}

export default ListItem