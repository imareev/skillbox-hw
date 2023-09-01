import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { Threadtitle } from './Threadtitle';
import { SortBlock } from './SortBlock';
import { UserBlock } from './UserBlock';

export function Header() {
  return (
    <header className={styles.header}>
      
      {/* <SearchBlock/> */}
      <Threadtitle/>
      <SortBlock/>
      <UserBlock/>
      
      
    </header>
  );
}
