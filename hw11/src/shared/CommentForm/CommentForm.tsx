import React, { ChangeEvent, FormEvent } from 'react';
import style from './CommentForm.css';

type Props = {
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentForm({ value, onChange, onSubmit }: Props) {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <textarea className={style.input} value={value} onChange={onChange} />
      <button type="submit" className={style.button}>
        Комментировать
      </button>
    </form>
  );
}
