import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handlerRemove }) => {
	return (
		<ul className={s.list}>
			{contacts.map(contact => (
				<Contact item={contact} key={contact.id} handlerRemove={handlerRemove} />
			))}
		</ul>
	);
};

export default ContactList;
