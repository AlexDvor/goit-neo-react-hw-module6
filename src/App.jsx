import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';
import { useDispatch } from 'react-redux';

const STORAGE_KEY = 'contacts';

// const defaultData = [
// 	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// 	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// 	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// 	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const getData = () => {
// 	const data = localStorage.getItem(STORAGE_KEY);
// 	if (!data) return defaultData;

// 	try {
// 		const parsedData = JSON.parse(data);
// 		return Array.isArray(parsedData) ? parsedData : defaultData;
// 	} catch {
// 		return defaultData;
// 	}
// };

function App() {
	const contacts = useSelector(state => state.contacts.items);
	const filter = useSelector(state => state.filters.name);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	const handleSearchChange = e => {
		dispatch(changeFilter(e.target.value));
		// setFilter(e.target.value);
	};

	const handleCreateUser = newCard => {
		console.log('🚀 ~ newCard:', newCard);
		if (!newCard) return;
		dispatch(addContact(newCard));
		// setContacts(prev => {
		// 	const exists = prev.some(
		// 		item => item.name.toLowerCase() === newCard.name.toLowerCase()
		// 	);
		// 	if (exists) return prev;
		// 	return [...prev, newCard];
		// });
	};

	const handleRemoveUser = id => {
		if (!id) return;
		dispatch(deleteContact(id));
		// setContacts(prev => {
		// 	return prev.filter(item => item.id !== id);
		// });
	};

	const visibleItems = contacts.filter(item =>
		item.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div className='container'>
			<h1>Phonebook</h1>
			<ContactForm handleAdd={handleCreateUser} />
			<SearchBox searchValue={filter} handleChange={handleSearchChange} />
			<ContactList contacts={visibleItems} handlerRemove={handleRemoveUser} />
		</div>
	);
}

export default App;
