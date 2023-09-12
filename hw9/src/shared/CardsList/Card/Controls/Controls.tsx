import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentButton } from './CommentButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';


interface Inum_comments{
  num_comments:string
}

export function Controls({num_comments}:Inum_comments) {
  return (
    <div className={styles.controls}>
      <KarmaCounter num_comments={num_comments}/>
      <CommentButton/>
      <div className={styles.actions}>
        <ShareButton/>
        <SaveButton/>
      </div>
    </div>
  );
}
