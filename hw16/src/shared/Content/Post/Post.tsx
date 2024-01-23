import React, { useContext, useEffect, useRef } from 'react';
import style from './post.css'
import ReactDOM from 'react-dom';
import { Comments } from './Comments';
import { commentsContext } from '../../context/commentsContext';
import { CommentFormContainer } from '../../CommentFormContainer/CommentFormContainer';
import { useNavigate } from 'react-router-dom';

interface Iprops {
  onClose?: () => void;
}

interface IComment {
  icon_img: string,
  author: string,
  league: string,
  body: string,
  replies: IComment[] | string;
}


export function Post(props: Iprops) {

  const ref = useRef<HTMLDivElement>(null);
  const navigate= useNavigate()
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const formContainer = document.querySelector('#modal_comment_root');
      if (formContainer && formContainer.contains(target)) {
        return;
      }
      if (!ref.current?.contains(target)) {
        navigate('/')
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_comment_root');

  if (!node) return null;

  const datas: IComment[] = useContext(commentsContext);

  return ReactDOM.createPortal((
    <div className={style.modal} ref={ref}>
      <h2>СМОТРИМ КВАРТИРЫ в LA ДОРОЖЕ $ 1 000 000</h2>
      <div className={style.content}>
        <p>В видео возможно упоминание Инстаграм и Фейсбук. Деятельность компании Meta Platforms Inc., которой принадлежит Инстаграм / Фейсбук, запрещена на территори
          и РФ в части реализации данных социальных сетей на основании осуществления ею экстремистской деятельности</p>
        <p>В видео возможно упоминание Инстаграм и Фейсбук. Деятельность компании Meta Platforms Inc., которой принадлежит Инстаграм / Фейсбук, запрещена на территори
          и РФ в части реализации данных социальных сетей на основании осуществления ею экстремистской деятельности</p>
      </div>
      <CommentFormContainer />
      {datas && <Comments data={datas} />}
    </div>
  ), node)
}
