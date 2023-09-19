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
import thunk, { ThunkAction } from 'redux-thunk'
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer, rootReducer, setToken as setToken } from './store/store'



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));



function AppComponent() {
  const TokenProvider = tokenContext.Provider
  const [token] = useToken();
  store.dispatch(setToken(token));
  //dispatch(updateToken(token));
  return (
    <Provider store={store}>
      <TokenProvider value={token}>
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
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

