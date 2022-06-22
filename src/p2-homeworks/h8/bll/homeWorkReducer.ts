import {UserType} from "../HW8";

type ActionType = SortHandlerType | CheckHandlerType

type SortHandlerType = {
    type: typeof SORT
    payload: 'up' | 'down'
}
type CheckHandlerType = {
    type: typeof CHECK
    payload: number
}
export const SORT = 'SORT'
export const CHECK = 'CHECK'

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case SORT: {
            return [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1
                } else {
                    return a.name > b.name ? -1 : 1
                }
            })
        }
        case CHECK: {

            return state.filter(item => item.age > action.payload)
        }
        default:
            return state
    }
}

export const sortHandler = (payload: 'up' | 'down'): SortHandlerType => ({type: SORT, payload})
export const checkHandler = (payload: number): CheckHandlerType => ({type: CHECK, payload})