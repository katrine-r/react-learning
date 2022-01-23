import { CHANGE_COUNTER, CHANGE_VALUE } from "../types"

export const changeCounter = payload => {
    return {
        type: CHANGE_COUNTER,
        payload
    }
}

export const changeValue = payload => {
    return {
        type: CHANGE_VALUE,
        payload
    }
}