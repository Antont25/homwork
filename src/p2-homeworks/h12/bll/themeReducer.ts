const initState = {
    themes: ['dark', 'red', 'some', 'yellow', 'blue'],
    theme: 'some'
};
type InitStateType = typeof initState
type ChangeThemeCType = {
    type: typeof CHANGE_THEME
    payload: string
}
const CHANGE_THEME = 'CHANGE_THEME'

export const themeReducer = (state = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (payload: string) => ({type: CHANGE_THEME, payload})