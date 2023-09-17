import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootReducer = {
    commentText: string,
    token:string
}

const initialState: RootReducer = {
    commentText: 'hello',
    token: ''
}

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: 'UPDATE_COMMENT',
    text,
})

export const setToken: ActionCreator<AnyAction> = (text) => ({
    type: 'UPDATE_TOKEN',
    text,
})

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const UPDATE_TOKEN = 'UPDATE_TOKEN'

export const rootReducer: Reducer<RootReducer> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case UPDATE_TOKEN :
            return {
                ...state,
                token:action.text
            }
            
        default:
            return state
    }
}
