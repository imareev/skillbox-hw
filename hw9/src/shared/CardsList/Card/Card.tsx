import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { PreView } from './PreView';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ITextContentProps {
  author: string,
  icon_img: string,
  title:string,
  thumbnail:string
  num_comments:string

}

export function Card(props: ITextContentProps) {
  const { author, icon_img, title, thumbnail,num_comments } = props;
  return (
    <li className={styles.card}>
      <TextContent author={author} icon_img={icon_img} title={title}/>
      <PreView thumbnail={thumbnail}/>
      <Menu/>
      <Controls num_comments={num_comments}/>
    </li>
  );
}
