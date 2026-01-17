import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.name = action.payload;
		},
	},
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
