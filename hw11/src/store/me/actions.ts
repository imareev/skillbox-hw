import { Action, ActionCreator } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootReducer } from "../store"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import React from "react"

export const ME_REQUEST = 'ME_REQUEST'
export type MeRequestAction = {

    type: typeof ME_REQUEST
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export interface IUserData {
    name?: string,
    iconImg?: string;

}

export const ME_REQUEST_SUCCES = 'ME_REQUEST_SUCCES'
export type MeRequestSuccesAction = {
    type: typeof ME_REQUEST_SUCCES,
    data: IUserData
}
export const meRequestSucces: ActionCreator<MeRequestSuccesAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCES,
    data
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR,
    error: string
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
})


export const meRequestAsync = (): ThunkAction<void, RootReducer, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `bearer ${getState().token}` }
    })
        .then((resp) => {
            dispatch(meRequestSucces({ name: resp.data.name, iconImg: resp.data.icon_img }))
        })
        .catch((error) => {
            console.error('Ошибка при загрузке данных:', error);
            dispatch(meRequestError(String(error)))
        });
}

export function useUserData() {
    const data = useSelector<RootReducer, IUserData>(state => state.me.data)
    const token = useSelector<RootReducer, string>(state => state.token)
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (!token || token === "undefined") return;
        dispatch(meRequestAsync());
    }, [token]);
    return data;
}