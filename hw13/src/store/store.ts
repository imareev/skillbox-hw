import { Action, ActionCreator, AnyAction, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { MeState, MyAction, meReducer } from "./me/reducer";
import { TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS } from "./token/action";
import { TokenAction, TokenState, tokenReducer } from "./token/reducer";

export type RootReducer = {
    commentText: string,
    token: TokenState,
    me: MeState
}


const initialState: RootReducer = {
    commentText: 'hello',
    token: { loading: false, error: '', token: '' },
    me: { loading: false, error: '', data: {} }
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


export type TMyAction =
    updateCommentAction |
    setTokenAction |
    MyAction |
    TokenAction

export const rootReducer: Reducer<RootReducer, TMyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        //case UPDATE_TOKEN:
        //    return {
        //        ...state,
        //        token: action.text
        //    }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        case TOKEN_REQUEST:
        case TOKEN_REQUEST_SUCCESS:
        case TOKEN_REQUEST_ERROR:
            return {
                ...state,
                token: tokenReducer(state.token, action)
            }
        default:
            return state
    }
}
