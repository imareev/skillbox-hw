import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import style from './CommentForm.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootReducer, updateComment } from '../../store/store';
import { CommentForm } from '../CommentForm/CommentForm';

interface Props {
  startStr?: string;
}

export function CommentFormContainer({ startStr }: Props) {
  // const store = useStore<RootReducer>();
  // const value = store.getState().commentText//более длинный способ получить стате

  const value = useSelector<RootReducer,string>(state=>state.commentText)
  const dispatch = useDispatch();

  const [confirmedStr, setConfirmedStr] = React.useState<string>('')

  if (startStr !== undefined) {
    setConfirmedStr(startStr + ', ');
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  return (
    <CommentForm 
    //value={value}
    // onSubmit={handleSubmit}


    />
  );
}
