import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./header.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Text } from "./shared/Text/Text";
import "./main.global.css";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider, userContext } from "./shared/context/userContext";
import { CommentContext } from "./shared/context/commentContext";
import { BestPostContextProvider } from "./shared/context/bestPostContext";
import {CommentsContextProvider} from "./shared/context/commentsContext";


function AppComponent() {
  const [commentValue, setCommentValue] = useState("");

  const CommentProvider = CommentContext.Provider;

  const [token] = useToken();

  return (
    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <BestPostContextProvider>
            <CommentsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content> 
            </Layout>
            </CommentsContextProvider>
          </BestPostContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);
