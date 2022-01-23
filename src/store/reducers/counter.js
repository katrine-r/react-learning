import { CHANGE_COUNTER, CHANGE_VALUE } from "../types"

const initialState = {
    counter: 0,
    value: 0
}

export const counterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: payload
            }
        case CHANGE_VALUE:
            return {
                ...state,
                value: payload
            }
        default:
            return state
    }
}