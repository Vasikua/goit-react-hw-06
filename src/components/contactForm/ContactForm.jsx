import { useId, useState } from 'react';
import { nanoid } from 'nanoid';
import { ErrorMessage,Field,Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch} from 'react-redux';
import css from './ContactForm.module.css';
import{addContact} from '../../redux/contactsSlice'

 
const UserSchema =Yup.object().shape({
  username: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
  number: Yup.number().positive().required("Is required"),
  });

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState(null);
    const [id, setId] = useState(null);
    
    const addCont = (values, actions) => {
        
        setName(values.username.trim());
        setNumber(values.number);
        setId(nanoid());
        actions.resetForm();

    }
    const usernameId = useId();
    const numberId = useId();


    return (
        <Formik initialValues={{
            username: "",
            number: "",
        }}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
                addCont(values, actions);
                dispatch(addContact({ id, name, number }))
            }}>
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={usernameId}>Name</label>
                    <Field type="text" name="username" id={usernameId} />
                    <ErrorMessage name="username" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={numberId} >number</label>
                    <Field type="number" name="number" id={numberId} />
                    <ErrorMessage name="number" component={"span"}/>
                </div>
                <button className={css.submit} type='submit'>Add contact</button>
        </Form>
        </Formik>
    );
} 