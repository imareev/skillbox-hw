import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Text } from "./shared/Text/Text";
import './main.global.css';
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider, userContext } from "./shared/context/userContext";
import { BestPostContextProvider } from "./shared/context/bestPostContext";
function AppComponent() {

  const [token] = useToken();
  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
