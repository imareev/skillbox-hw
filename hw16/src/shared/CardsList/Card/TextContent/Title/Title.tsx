import React from 'react';
import styles from './title.css';
import { Post } from '../../../../Content/Post';
import { CommentsContextProvider } from '../../../../context/commentsContext';
import { Link, Route } from 'react-router-dom'

interface ITitle {
  title: string,
  id: string;
}

export function Title({ title, id }: ITitle) {


  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${1}`} className={styles.postLink}>
        {title}
      </Link>
      
    </h2>
  );
}
