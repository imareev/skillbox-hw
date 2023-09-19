import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCES } from "./me/actions";
import { MeState, MyAction, meReducer } from "./me/reducer";

export type RootReducer = {
    commentText: string,
    token:string,
    me:MeState
}

const initialState: RootReducer = {
    commentText: 'hello',
    token: '',
    me:{loading:false, error:'',data:{}}
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
 
export type updateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string
}

export type setTokenAction = {
    type: typeof UPDATE_TOKEN,
    text: string
}


export type TMyAction  =
updateCommentAction |
setTokenAction |
MyAction

export const rootReducer: Reducer<RootReducer,TMyAction> = (state = initialState, action) => {
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
        case ME_REQUEST:
        case ME_REQUEST_SUCCES:
        case ME_REQUEST_ERROR:
        return{
            ...state,
            me: meReducer(state.me , action)
        }               
        default:
            return state
    }
}
