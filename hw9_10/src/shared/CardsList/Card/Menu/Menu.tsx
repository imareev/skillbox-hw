import React, { useState } from 'react';
import styles from './menu.css';
import { MenuIcon } from '../../../icons/MenuIcon';
import { Dropdown } from '../../../Dropdown';
import { Text } from '../../../Text/Text';
import { CommentIcon } from '../../../icons/CommentIcon';
import { ChareIcon } from '../../../icons/ChareIcon';
import { HideIcon } from '../../../icons/HideIcon';
import SaveIcon from '../../../icons/SaveIcon/SaveIcon';
import ComplainIcon from '../../../icons/ComplainIcon/ComplainIcon';
import { EIcon } from '../../../Icon/Icon';
import { Icon } from '../../../Icon/Icon';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<button className={styles.menuButton} ><MenuIcon /></button>}>
          <div className={styles.dropdown}  >
            <Text size={14}>
              <ul >
                <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Comment}</Icon>Комментарии</li>
                <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Chare}</Icon>Поделиться</li>
                <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Hide}</Icon>Скрыть</li>
                <li className={styles.dropdownPoint}><Icon size={15}>{EIcon.Save}</Icon>Сохранить</li>
                <li className={`${styles.dropdownPoint} ${styles.dropdownLastPoint} `}> <Icon size={15}>{EIcon.Complain}</Icon>Пожаловаться</li>

              </ul>
            </Text>
          </div>
      </Dropdown>
    
    </div>
  );
}
