import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { bestPostContext } from '../context/bestPostContext';
import { useBestPosts } from '../../hooks/useBestPosts';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/store';
import { compose } from 'redux';

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
  const token = useSelector<RootReducer, string>(state => state.token.token)
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false)
  const [errorLoading, setErrorLoading] = useState("")
  const [nextAfter, setNextAfter] = useState("")
  const [numAfter, setNumAfter] = useState(0);

  const bottomOflist = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!token || token === "undefined") return;
    async function load() {

      setErrorLoading("");
      setLoad(true);
      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/rising', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 4,
            after: nextAfter,
          }
        })

        if (numAfter < 3) {
          setNextAfter(after)
          setPosts(prev => prev.concat(...children));
          setNumAfter(numAfter + 1);
        }


      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoad(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting)
        load()
    }, {
      rootMargin: "100px"
    })

    if (bottomOflist.current)
      observer.observe(bottomOflist.current)

    return () => {
      if (bottomOflist.current)
        observer.unobserve(bottomOflist.current)
    }
  }, [bottomOflist.current, nextAfter, numAfter])
  return (
    <ul className={styles.cardsList}>

      {posts.map((item: any) => (
        
        <Card

          id={item.data.id}
          key={item.data.id}
          author={""}
          icon_img={img}
          title={item.data.title}
          thumbnail={img}
          num_comments={""}



        // id={item.id ? item.id : 'найди нормальный пост если не пришел id'}
        // key={item.id}
        // author={item.data.author || ""}
        // icon_img={item.data.icon_img ? item.icon_img : img}
        // // title={item.title }
        // title={item.data.title}
        // thumbnail={item.thumbnail ? item.thumbnail : img}
        // num_comments={item.data.num_comments || ""}
        />
      ))}
      {numAfter >= 3 ? <button onClick={() => { setNumAfter(0) }} className={styles.button}>Ещё</button> : null}
      {numAfter < 3 && load && <div style={{ textAlign: 'center' }}>Загрузка...</div>}
      {errorLoading && <div role="alert">{errorLoading}</div>}
      <div ref={bottomOflist}></div>
    </ul>
  );
}
