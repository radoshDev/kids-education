import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExerciseState } from '../../types/store'
import { RootState } from '../store'

const initialState: ExerciseState = {
	syllables: [],
	isMute: false,
	imageIndex: 0,
	isExercise: false,
	isUpperCase: true,
	roundCount: 0,
	cost: 1,
	passedExerciseCount: 0,
}

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {
		setSyllables: (state, action: PayloadAction<string[]>) => {
			state.syllables = action.payload
		},
		toggleCase: state => {
			state.isUpperCase = !state.isUpperCase
		},
		handleRound: (state, action: PayloadAction<number>) => {
			state.roundCount = action.payload
		},
		handleCount: (state, action: PayloadAction<number>) => {
			state.passedExerciseCount = action.payload
		},
		refreshExercise: () => initialState,
		setExercise: (state, action: PayloadAction<boolean>) => {
			state.isExercise = action.payload
		},
		setImageIndex: (state, action: PayloadAction<number>) => {
			state.imageIndex = action.payload
		},
	},
})

export const selectExercise = (state: RootState): ExerciseState =>
	state.exercise

export const {
	setSyllables,
	toggleCase,
	handleRound,
	handleCount,
	setExercise,
	refreshExercise,
	setImageIndex,
} = exerciseSlice.actions
