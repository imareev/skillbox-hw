import { Reducer } from "redux";
import { TOKEN_REQUEST, TOKEN_REQUEST_ERROR, TOKEN_REQUEST_SUCCESS, TokenRequestAction, TokenRequestErrorAction, TokenRequestSuccessAction } from "./action";
export type TokenState = {
    loading: boolean,
    error: string,
    token: string,
}

export type TokenAction =
    TokenRequestAction |
    TokenRequestErrorAction |
    TokenRequestSuccessAction

export const tokenReducer: Reducer<TokenState, TokenAction> = (state = { loading: false, error: "", token: "" }, action) => {
    switch (action.type) {
        case TOKEN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case TOKEN_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case TOKEN_REQUEST_SUCCESS:
            return{
                ...state,
                token:action.data
            };

        default:
            return state;
    }
}
