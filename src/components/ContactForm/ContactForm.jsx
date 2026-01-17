import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { CardSchema } from '../validation';

import s from './ContactForm.module.css';

const initialFieldsValue = {
	name: '',
	number: '',
};

const ContactForm = ({ handleAdd }) => {
	const handleSubmit = (value, action) => {
		try {
			const newItem = { ...value, id: nanoid() };
			handleAdd(newItem);
			action.resetForm();
		} catch (error) {
			console.log('🚀 ~ There was an error during card creation:', error);
		}
	};

	return (
		<>
			<Formik
				initialValues={initialFieldsValue}
				validationSchema={CardSchema}
				onSubmit={handleSubmit}
			>
				{({ isValid, dirty }) => (
					<Form className={s.formWrap}>
						<div className={s.fieldBox}>
							<label htmlFor='name'>Name</label>
							<Field
								name='name'
								type='text'
								id='name'
								placeholder='Example: Pedro Sanchez'
							/>
							<ErrorMessage name='name' component='p' className={s.error} />
						</div>
						<div className={s.fieldBox}>
							<label htmlFor='number'>Number</label>
							<Field
								name='number'
								type='text'
								id='number'
								placeholder='Example: 631-26-86'
							/>
							<ErrorMessage
								name='number'
								component='p'
								className={s.error}
							/>
						</div>

						<button type='submit' disabled={!(isValid && dirty)}>
							Add contact
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ContactForm;
