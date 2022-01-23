import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeCounter, changeValue } from "../../store/actions/counter"


const Counter = () => {
    
    const dispatch = useDispatch()
    const { counter, value } = useSelector(state => state.counter)
    console.log("counter", counter)

    console.log("value", value);
    return (
        <>
            <h1>Counter</h1>
            <div>{counter}</div>
            <button 
                onClick={() => dispatch(changeCounter(Number(counter) + Number(value)))} 
            >+</button>
            <button 
                onClick={() => dispatch(changeCounter(Number(counter) - Number(value)))} 
            >-</button>
            <input 
                type="number" 
                value={value} 
                onChange={(ev) => dispatch(changeValue(ev.target.value))} 
            />
        </>
    )
}

export default Counter