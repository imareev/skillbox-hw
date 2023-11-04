import React from "react";
import styles from './Comment.css';

import { EIcon, Icon } from "../../../../Icon/Icon";

interface IProps{
    body:string
}

export default function CommentText({body}:IProps) {
    return (
        <div>
            <div className={styles.verticalbar}>

                <div className={styles.textComment}>{body}</div>
                    <ul className={styles.horizontalDropDown}>
                        <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Comment}</Icon>Ответить</li>
                        <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Chare}</Icon>Поделиться</li>
                        <li className={`${styles.dropdownPoint} ${styles.dropdownLastPoint} `}> <Icon size={15}>{EIcon.Complain}</Icon>Пожаловаться</li>
                    </ul>
            </div>
        </div>
    )
}