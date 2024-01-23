import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './CommentForm.css';

import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Comment {
  value = 'mobxe';

  constructor() {
    makeAutoObservable(this);
  }

  updateValue(newValue: string) {
    this.value = newValue;
  }
}

const myComment = new Comment();


function handleChange(value: string) {
  myComment.updateValue(value);
}

export const CommentForm = observer(() => {
  const Schema = Yup.object({
    comment: Yup.string()
      .min(3, 'В строке должно быть больше трёх символов')
      .required('Обязательное поле'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          comment: myComment.value,
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
});
