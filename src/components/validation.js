import * as Yup from 'yup';

export const CardSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Name is too short!')
		.max(50, 'Name is too long')
		.required('Required'),
	number: Yup.string()
		.matches(/^\d{3}-\d{2}-\d{2}$/, 'Format must be 631-26-86')
		.required('Required'),
});
