import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Text } from "./shared/Text/Text";
import './main.global.css';
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { assingId, generateId, generateRandomString } from "./utils/getRandomIndex";
import { merge } from "./utils/merge";
import { Dropdown } from "./shared/Dropdown";

const LIST = [
  { value: 'some1' },
  { value: 'some2' },
  { value: 'some3' },
  { value: 'some4' },
  { value: 'some5' },
  { value: 'some6' },
  { value: 'some7' },
  { value: 'some8' },
].map(generateId)

function AppComponent() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id != id))
  }
  const handleAdd = () => {
    setList(list.concat(generateId({ value: generateRandomString() })))
  }
  return (
    <header>
      <Layout>
        <Header />
        <Content>
          <CardsList />
          {/* <br/>
          <Text size={20} mobileSize={50}>Lab</Text>
          <Text size={20} mobileSize={16}>Lab2</Text> */}
        </Content>
      </Layout>
    </header>
  );
}

export const App = hot(() => <AppComponent />);
