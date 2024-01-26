import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './CommentForm.css';
import { comment, commentState } from '../../recoil/atom/atomRecoil';
import { useRecoilState, useRecoilValue } from 'recoil';



export function CommentForm() {
  const [text, setText] = useRecoilState(comment);
  const onChange = (event:any) => {
    console.log(event.target.value)
    setText(event.target.value);
  };

  const Schema = Yup.object({
    comment: Yup.string()
      .min(3, 'В строке должно быть больше трёх символов')
      .required('Обязательное поле'),
  });


  return (
    <div>
      <Formik
        initialValues={{
          comment: text,
          
        }}
        onReset={onChange}
        validationSchema={Schema}
        onSubmit={values => {
          alert("Comment submitted!");
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            <input type="text" name="comment"  className={style.input}  defaultValue={text} onChange={(event) => setText(event.target.value)}/>
            <ErrorMessage name="comment" component="div" />
            <button type="submit" className={style.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
