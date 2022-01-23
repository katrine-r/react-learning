import { CHANGE_COUNTER } from "../types"

export const changeCounter = payload => {
    return {
        type: CHANGE_COUNTER,
        payload
    }
}