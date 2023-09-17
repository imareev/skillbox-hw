import React from 'react';
import styles from './textContent.css';
import { UserLink } from './UserLink';
import { Title } from './Title';

interface ITextContentProps {
  author: string,
  icon_img: string,
  title: string,
  id: string
}

export function TextContent(props: ITextContentProps) {
  const { author, icon_img, title, id } = props;

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} icon_img={icon_img} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span> 4 часа назад
        </span>
      </div>
      <Title title={title} id={id} />
    </div>
  );
}
