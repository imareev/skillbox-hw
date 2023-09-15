import React from 'react';
import styles from './userlink.css';

interface TextContentProps {
  author: string;
  icon_img: string;
}

export function UserLink({author,icon_img}:TextContentProps) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar}
        src={icon_img}
        alt="avatar" 
      />
      <a href="#post-url" className={styles.username}>{author} &nbsp;</a>
    </div>
  );
}
