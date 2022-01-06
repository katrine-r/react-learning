import React from 'react' 
import ListItem from '../ListItem'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const List = ({data, removeHandle}) => {
    return (
        <div>
            <ul>
                <TransitionGroup className="todo-list">
                    {data.map((i, index) => (
                        <CSSTransition
                            key={i.id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListItem 
                                id={i.id}
                                key={i.id}
                                num={index + 1}
                                title={i.title} 
                                text={i.text} 
                                removeHandle={removeHandle}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default List