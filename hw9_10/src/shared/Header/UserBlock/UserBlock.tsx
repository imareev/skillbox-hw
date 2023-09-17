import React from 'react';
import styles from './UserBlock.css'
import { AnonIcon } from '../../Icon/AnonIcon';
import { EColor, Text } from '../../Text/Text';
interface Props {
  avatarSrc?: string,
  username?: string
}



export function UserBlock({ avatarSrc, username }: Props) {
  const link = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`;  
  return (<a className={styles.avatarBox} 
    href={link}>
    <div className={styles.avatarBox}>
      {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
        : <AnonIcon />
      }
    </div>

    <div className={styles.username}>
      <Text size={20} color={username?EColor.black:EColor.grey} children={username || 'Аноним'}/>
    </div>
  </a>);
}