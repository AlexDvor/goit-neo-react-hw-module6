import s from './SearchBox.module.css';

const SearchBox = ({ searchValue, handleChange }) => {
	return (
		<div className={s.thumb}>
			<label htmlFor='search'>Find contacts by name</label>
			<input
				type='text'
				name='search'
				id='search'
				value={searchValue}
				onChange={handleChange}
			></input>
		</div>
	);
};

export default SearchBox;
