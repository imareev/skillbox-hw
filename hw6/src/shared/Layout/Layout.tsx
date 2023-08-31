import React from 'react';
import styles from './layout.css';
interface IlayoutPorps{
  children?:React.ReactNode;
}
export function Layout({children}:IlayoutPorps) {
  return (
      <div className={styles.layout}>
        {children}
      </div>
  );
}
