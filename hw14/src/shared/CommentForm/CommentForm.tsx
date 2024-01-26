import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './CommentForm.css';



interface Props1{
  handleChange:any
}
const myComment = new Comment();

export const CommentForm =({ handleChange }:Props1) => {
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
        {({ errors, touched, values, handleChange: formikHandleChange }) => (
          <Form className={style.form}>
            <Field
              type="text"
              name="comment"
              className={style.input}
              onChange={(e:any) => {
                formikHandleChange(e);
                handleChange(e.target.value); // Call your custom handleChange function
              }}
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
