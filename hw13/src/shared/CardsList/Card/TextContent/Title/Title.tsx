import React, { useEffect, useRef, useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Content/Post';
import { CommentsContextProvider } from '../../../../context/commentsContext';

interface ITitle {
  title: string,
  id:string;
}

export function Title({ title,id }: ITitle) {
  

  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <h2 className={styles.title}>
      <a href='#post-url' className={styles.postLink} onClick={() => { setIsModelOpen(!isModelOpen) }}>
        {title}
      </a>

      {isModelOpen && (
        <CommentsContextProvider idPost={id}>
       <Post 
       onClose={()=>setIsModelOpen(false)} />
       </CommentsContextProvider>
       
      )}
    </h2>
  );
}
