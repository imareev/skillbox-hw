import React, { ChangeEvent, FormEvent, useContext } from 'react';
import style from './CommentForm.css';
import { CommentContext } from '../context/commentContext';

interface Props {}

export function CommentForm({}: Props) {
  const { value, onChange } = useContext(CommentContext);

  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea className={style.input} value={value} onChange={handleChange} />
      <button type="submit" className={style.button}>
        Комментировать
      </button>
    </form>
  );
}
