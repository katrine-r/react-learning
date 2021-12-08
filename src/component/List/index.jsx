import React from 'react' 
import ListItem from '../ListItem'

const List = ({title, data, children}) => {
    return (
        <div>
            {children}
            <h2>{title}</h2>
            <ul>
                {data.map((i, index) => (
                <ListItem 
                    key={i.id}
                    num={index + 1}
                    title={i.title} 
                    text={i.text} 
                />
                ))}
            </ul>
        </div>
    )
}

export default List