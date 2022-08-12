import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POKEMONS_STORAGE_KEY } from '../../constants'
import { ApiState, Pokemon } from '../../types/store'
import { RootState } from '../store'

const initialState: ApiState = {
	pokemons: JSON.parse(localStorage.getItem(POKEMONS_STORAGE_KEY) || '[]'),
}

export const apiSlice = createSlice({
	name: 'api',
	initialState,
	reducers: {
		setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
			state.pokemons = action.payload
		},
	},
})

export const selectPokemons = (state: RootState): Pokemon[] =>
	state.api.pokemons

export const { setPokemons } = apiSlice.actions
