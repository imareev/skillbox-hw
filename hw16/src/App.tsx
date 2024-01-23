import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import "./main.global.css";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { UserContextProvider, userContext } from "./shared/context/userContext";
import { BestPostContextProvider } from "./shared/context/bestPostContext";
import { Action, Middleware, applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer, rootReducer, setToken as setToken } from './store/store'
import { BrowserRouter, Navigate, Route, Router, Routes, redirect } from 'react-router-dom'
import { CommentsContextProvider } from "./shared/context/commentsContext";
import { Post } from "./shared/Content/Post";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

  }, [])
  useToken();
  return (
    <UserContextProvider>
      {mounted &&
        <BrowserRouter>
          <BestPostContextProvider>
            <Layout>
              <Header />
              <Content>
              
                <Routes>
                  <Route path="/posts/:id" element={<Post/>} />
                  <Route path="/posts" Component={CardsList} />
                  <Route path="/" element={<Navigate to="/posts"/>}/>
                  <Route path="*" element={<div>404 — страница не найдена</div>}/>
                  <Route path="/:ever" element={<Navigate to="/posts"/>}/>
                </Routes>
              </Content>
            </Layout>
          </BestPostContextProvider>
        </BrowserRouter>}
    </UserContextProvider>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));

