import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WordState } from '../../types/store'
import { RootState } from '../store'

const initialState: WordState = {
	isUpperCase: true,
	roundCount: 1,
	count: 1,
}

export const wordSlice = createSlice({
	name: 'word',
	initialState,
	reducers: {
		toggleCase: state => {
			state.isUpperCase = !state.isUpperCase
		},
		nextRound: state => {
			state.roundCount += 1
		},
		nextCount: (state, action: PayloadAction<number>) => {
			state.count = action.payload
		},
	},
})

export const selectWord = (state: RootState): WordState => state.word

export const { toggleCase, nextRound, nextCount } = wordSlice.actions
