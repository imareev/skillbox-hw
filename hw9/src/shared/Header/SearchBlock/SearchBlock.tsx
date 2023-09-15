import React, { useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from '../UserBlock';
import { useUserData } from '../../../hooks/useUserData';
import { userContext }     from '../../context/userContext';
import { bestPostContext } from '../../context/bestPostContext';
import { commentsContext } from '../../context/commentsContext';


export function SearchBlock() {
  const {iconImg, name}= useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
