import React from 'react';
import styles from './content.css';
interface IlayoutPorps{
  children?:React.ReactNode;
}
export function Content({children}:IlayoutPorps) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}
