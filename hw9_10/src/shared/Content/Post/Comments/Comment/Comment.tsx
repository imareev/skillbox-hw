import React, { useState } from 'react';
import styles from './Comment.css';
import { UserLink } from '../../../../CardsList/Card/TextContent/UserLink';
import CommentText from './CommentText';
import Arrows from './Arrows';
import Comments from '../Comments';
import { EIcon, Icon } from '../../../../Icon/Icon';
import { CommentForm } from '../../../../CommentForm';
import { ResponseForm } from '../components';

interface IComment {
  icon_img: string,
  author: string,
  league: string,
  body: string,
  replies: IComment[] | string;
}

export function Comment(data: IComment) {

  const [isComForm,setIsComForm]=useState(false);

  if (data.body !== '' && data.author !== '' && Array.isArray(data.replies) && data.replies.length > 0) {
    return (
      <div className={styles.textContent}>
        <div className={styles.verticalbar}>
          <div className={styles.textComment}>{data.body}</div>
          <ul className={styles.horizontalDropDown}>
            <button className={styles.dropdownPoint} onClick={()=>{setIsComForm(!isComForm)}}><Icon size={15}>{EIcon.Comment}</Icon>Ответить</button>
            <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Chare}</Icon>Поделиться</li>
            <li className={`${styles.dropdownPoint} ${styles.dropdownLastPoint} `}> <Icon size={15}>{EIcon.Complain}</Icon>Пожаловаться</li>
          </ul>
          <Comments data={data.replies as IComment[]} />
        </div>
        <div className={styles.metaData}>
          <div className={styles.league}> {data.league} </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}></span> 4 часа назад&nbsp;
          </span>
          <UserLink author={data.author} icon_img={data.icon_img} />
          <Arrows />
          {isComForm&& (
            <ResponseForm onClose={()=>setIsComForm(false)} name={data.author}/>
          )

          }
        </div>
      </div>
    );
  }
  return null;
}
