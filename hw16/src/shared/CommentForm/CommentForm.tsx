import React from 'react';
import { useRecoilState } from 'recoil';
import { atom, useSetRecoilState } from 'recoil';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './CommentForm.css';

// Создаем атом для хранения значения комментария
const commentState = atom<string>({
  key: 'commentState',
  default: 'initial comment',
});

export const CommentForm: React.FC = () => {
  const setComment = useSetRecoilState(commentState);

  const Schema = Yup.object({
    comment: Yup.string()
      .min(3, 'В строке должно быть больше трёх символов')
      .required('Обязательное поле'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          comment: '', 
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          alert('Comment submitted!');
        }}
      >
        {({ handleChange, values }) => (
          <Form className={style.form}>
            <Field
              type="text"
              name="comment"
              className={style.input}
              onChange={handleChange}
            />
            <ErrorMessage name="comment" component="div" />
            <button type="submit" className={style.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
