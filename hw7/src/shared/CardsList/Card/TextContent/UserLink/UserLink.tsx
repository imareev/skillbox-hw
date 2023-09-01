import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
            <img className={styles.avatar}
              src='https://sun9-46.userapi.com/impg/U6tLoK1tBz-_MxbRcKYHjbn9L-VL7b1RvXXmVw/B--asQfzoB0.jpg?size=883x684&quality=96&sign=7edeb9f1e9adb5c77d421a7fa1a49812&type=album'
              alt="avatar" 
              />
            <a href="#post-url" className={styles.username}>Мареев Иван</a>
      </div>
  );
}
