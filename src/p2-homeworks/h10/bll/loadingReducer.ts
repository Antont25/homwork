const SET_LOADING = 'SET_LOADING'
type InitStateType = typeof initState
type LoadingACType = {
    type: typeof SET_LOADING
    payload: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export const loadingAC = (payload: boolean): LoadingACType => ({type: SET_LOADING, payload}) // fix any