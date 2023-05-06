import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import './main.global.css';
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";


function AppComponent() {
  return (
    <header>
      <Layout>
        <Header/>
        <Content>
          <CardsList/>
        </Content>
      </Layout>
    </header>
  );
}

export const App = hot(AppComponent);
