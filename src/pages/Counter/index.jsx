import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeCounter } from "../../store/actions/counter"


const Counter = () => {

    // const [counter, setCounter] = useState(0)
    
    const dispatch = useDispatch()
    const { counter } = useSelector(state => state.counter)
    console.log('counter', counter)
    
    return (
        <>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button onClick={() => dispatch(changeCounter(counter + 1))} >+</button>
            <button onClick={() => dispatch(changeCounter(counter - 1))} >-</button>
        </>
    )
}

export default Counter