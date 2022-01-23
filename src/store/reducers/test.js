import { CHANGE_TEST } from "../types";

const initialState = {
    test: 'initial'
}

export const testReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case CHANGE_TEST:
            return {
                ...state,
                test: payload
            }
        default: 
            return state;
    }
}