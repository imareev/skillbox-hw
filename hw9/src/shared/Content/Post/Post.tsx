import React, { useEffect, useRef } from 'react';
import style from './post.css'
import ReactDOM from 'react-dom';
import { CommentForm } from '../../CommentForm';

interface Iprops {
  onClose?: () => void;
}

export function Post(props: Iprops) {

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={style.modal} ref={ref}>
      <h2>СМОТРИМ КВАРТИРЫ в LA ДОРОЖЕ $ 1 000 000</h2>
      <div className={style.content}>
        <p>В видео возможно упоминание Инстаграм и Фейсбук. Деятельность компании Meta Platforms Inc., которой принадлежит Инстаграм / Фейсбук, запрещена на территори
          и РФ в части реализации данных социальных сетей на основании осуществления ею экстремистской деятельности</p>
        <p>В видео возможно упоминание Инстаграм и Фейсбук. Деятельность компании Meta Platforms Inc., которой принадлежит Инстаграм / Фейсбук, запрещена на территори
          и РФ в части реализации данных социальных сетей на основании осуществления ею экстремистской деятельности</p>
      </div>
      <CommentForm/>
    </div>
  ), node)
}