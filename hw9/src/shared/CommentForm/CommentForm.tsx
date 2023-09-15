import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import style from './CommentForm.css';
import { CommentContext } from '../context/commentContext';

interface Props {
  startStr?:string;
}

export function CommentForm({startStr}:Props) {
  const { value, onChange } = useContext(CommentContext);

   const [confirmedStr,setConfirmedStr]=React.useState<string>('')

  if(startStr!==undefined){
    setConfirmedStr(startStr+', ');
  }
  
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <textarea className={style.input} value={value+confirmedStr} onChange={handleChange} />
      <button type="submit" className={style.button}>
        Комментировать
      </button>
    </form>
  );
}
