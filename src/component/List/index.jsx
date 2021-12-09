import React from 'react' 
import ListItem from '../ListItem'

const List = ({data, removeHandle}) => {
    return (
        <div>
            <ul>
                {data.map((i, index) => (
                <ListItem 
                    id={i.id}
                    key={i.id}
                    num={index + 1}
                    title={i.title} 
                    text={i.text} 
                    removeHandle={removeHandle}
                />
                ))}
            </ul>
        </div>
    )
}

export default List