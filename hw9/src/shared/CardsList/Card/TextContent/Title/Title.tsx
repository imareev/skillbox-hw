import React, { useEffect, useRef, useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Content/Post';

interface ITitle {
  title: string
}

export function Title({ title }: ITitle) {
  

  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink} onClick={() => { setIsModelOpen(!isModelOpen) }}>
        {title}
      </a>

      {isModelOpen && (
       <Post 
       onClose={()=>setIsModelOpen(false)} />
      )}
    </h2>
  );
}
