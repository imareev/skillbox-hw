import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef } from 'react';
import styles from './ResponseForm.css';
import ReactDOM from 'react-dom';
import { CommentContext } from '../../../../../context/commentContext';

interface ResponseFormProps {
  onClose?: () => void;
  name: string
}

export function ResponseForm(props: ResponseFormProps) {
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  const node = document.querySelector('#modal_comment_root');
  if (!node) return null;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    props.onClose?.();
  }


  return ReactDOM.createPortal((
    <div className={styles.ResFrom} ref={ref}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea className={styles.input} defaultValue={props.name+', '}  />
        <button type="submit" className={styles.button}>
          Комментировать
        </button>
      </form>
    </div>
  ), node)

}
