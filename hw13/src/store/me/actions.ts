import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootReducer } from "../store";
import axios from "axios";

export const ME_REQUEST = 'ME_REQUEST'
export interface MeRequestAction {
  type: typeof ME_REQUEST
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST
})

export interface IUserData {
  name?: string,
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export interface MeRequestSuccessAction {
  type: typeof ME_REQUEST_SUCCESS,
  data: IUserData
}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export interface MeRequestErrorAction {
  type: typeof ME_REQUEST_ERROR,
  error: string
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})

export const meRequestAsync = (): ThunkAction<void, RootReducer, unknown, Action> => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: { Authorization: `bearer ${getState().token}` }
  })
    .then((resp) => {
      console.log(resp)
      dispatch(meRequestSuccess({ name: resp.data.name, iconImg: resp.data.icon_img }));
    })
    .catch((error) => {
      dispatch(meRequestError(String(error)));
    });
};
