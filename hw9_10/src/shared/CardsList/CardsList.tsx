import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { bestPostContext } from '../context/bestPostContext';
import { useBestPosts } from '../../hooks/useBestPosts';

interface IBestPost {
  date?: string;
  id?: string;
  author?: string;
  icon_img?: string;
  created_ups?: string;
  title?: string;
  num_comments?: string;
  thumbnail?: string
}

export function CardsList() {
  const data: IBestPost[] = useContext(bestPostContext)
  const img: string = "http://griffiny.ru/uploads/posts/2019-11/1573736888_1.jpg"

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = img;
  }

  return (
    <ul className={styles.cardsList}>
      {data.map((item: IBestPost) => (
        <Card
          id={item.id?item.id:'найди нормальный пост если не пришел id'}
          key={item.id}
          author={item.author || ""}
          icon_img={item.icon_img ? item.icon_img : img}
          title={item.title || ""}
          thumbnail={item.thumbnail ? item.thumbnail : img}
          num_comments={item.num_comments || ""}
        />
      ))}
    </ul>
  );
}
