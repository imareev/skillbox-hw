import { Action, ActionCreator, applyMiddleware, compose, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { RootReducer, rootReducer } from "../store";
import axios from "axios";
import { indexTemplate } from "../../server/indexTemplate";
import { App } from "../../App";
import { } from "react-dom/server";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { useDispatch } from "react-redux";
import React from "react";

export const TOKEN_REQUEST = 'TOKEN_REQUEST'
export interface TokenRequestAction {
    type: typeof TOKEN_REQUEST
}
export const tokenRequest: ActionCreator<TokenRequestAction> = () => ({
    type: TOKEN_REQUEST
})

export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS'
export interface TokenRequestSuccessAction {
    type: typeof TOKEN_REQUEST_SUCCESS,
    data: string
}
export const tokenRequestSuccess: ActionCreator<TokenRequestSuccessAction> = (data: string) => ({
    type: TOKEN_REQUEST_SUCCESS,
    data
})

export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR'
export interface TokenRequestErrorAction {
    type: typeof TOKEN_REQUEST_ERROR,
    error: string
}
export const tokenRequestError: ActionCreator<TokenRequestErrorAction> = (error: string) => ({
    type: TOKEN_REQUEST_ERROR,
    error,
})







