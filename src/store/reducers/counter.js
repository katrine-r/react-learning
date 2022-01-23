import { CHANGE_COUNTER } from "../types"

const initialState = {
    counter: 0
}

export const counterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case CHANGE_COUNTER:
            return {
                ...state,
                counter: payload
            }
        default:
            return state
    }
}