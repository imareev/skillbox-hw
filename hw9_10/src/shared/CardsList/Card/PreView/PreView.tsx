import React from 'react';
import styles from './preview.css';

interface Ithumbnail{
  thumbnail:string
}

export function PreView({thumbnail}:Ithumbnail) {
  return (
    <div className={styles.preview}>
      <img 
      className={styles.previewImg}
      src={thumbnail}
      />

    </div>
  );
}
