import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import "./main.global.css";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider, userContext } from "./shared/context/userContext";
import { BestPostContextProvider } from "./shared/context/bestPostContext";
import { Action, Middleware, applyMiddleware, createStore } from "redux";
import thunk  from 'redux-thunk'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer, rootReducer, setToken as setToken } from './store/store'
import { RecoilRoot, atom } from "recoil";



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));




function AppComponent() {
  useToken();
  //dispatch(updateToken(token));
  return (

    //<TokenProvider value={token}>
      <UserContextProvider>
        <BestPostContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </BestPostContextProvider>
      </UserContextProvider>
    //</TokenProvider>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <RecoilRoot>
    <AppComponent />
    </RecoilRoot>
  </Provider>
));

