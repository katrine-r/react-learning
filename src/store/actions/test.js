import { CHANGE_TEST } from "../types"

export const changeTest = payload => {
    return {
        type: CHANGE_TEST,
        payload
    }
}