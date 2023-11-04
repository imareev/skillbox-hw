import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App.tsx";
import { indexTemplate } from "./indexTemplate";
import Axios from "axios";
import { Header } from "../shared/Header/Header.js";
import { tokenRequestAsync, tokenRequestSuccess } from "../store/token/action.ts";
import { Action, Middleware, applyMiddleware, createStore } from "redux";
import thunk  from 'redux-thunk'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer } from './store/store'
import { useDispatch } from "react-redux";
import ReactDOMServer from 'react-dom/server';
import React from "react";


const app = express();

app.use("/static", express.static("./dist/client"));


export function ComptokenRequestAsync(req, res) {
  Axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {

        auth: { username: process.env.CLIENT_ID, password: 'fiwlazCZlh3L9yy5ys6uQJABXnsqaw' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
)
    .then(({ data }) => {
        const dispatch = useDispatch()
        React.useEffect(() => {
            dispatch(tokenRequestSuccess(data['access_token']))
        }, [])

    })
    .catch(console.log);
  React.useEffect(() => {
    dispatch(tokenRequestAsync(req, res));
  }, []);

  return null;
}

const func = (req, res) => {
  Axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {

        auth: { username: process.env.CLIENT_ID, password: 'fiwlazCZlh3L9yy5ys6uQJABXnsqaw' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    }
)
    .then(({ data }) => {
      res.send( 
        indexTemplate(ReactDOM.renderToString(App()),data['access_token'])
      )

    })
    .catch(console.log);
    
    

}

app.get("/auth",func);

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});