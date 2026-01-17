import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';
import { useDispatch } from 'react-redux';

function App() {
	const contacts = useSelector(state => state.contacts.items);
	const filter = useSelector(state => state.filters.name);
	const dispatch = useDispatch();

	const handleSearchChange = e => {
		dispatch(changeFilter(e.target.value));
	};

	const handleCreateUser = newCard => {
		if (!newCard) return;
		dispatch(addContact(newCard));
	};

	const handleRemoveUser = id => {
		if (!id) return;
		dispatch(deleteContact(id));
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
