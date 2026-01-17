import s from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ item, handlerRemove }) => {
	const { id, name, number } = item;
	return (
		<li className={s.item}>
			<div>
				<div className={s.userInfo}>
					<FaUser />
					<p>{name}</p>
				</div>
				<div className={s.userInfo}>
					<FaPhone />
					<p>{number}</p>
				</div>
			</div>
			<div>
				<button onClick={() => handlerRemove(id)}>Delete</button>
			</div>
		</li>
	);
};

export default Contact;
