import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExerciseState } from '../../types/store'
import { RootState } from '../store'

const initialState: ExerciseState = {
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
		toggleCase: state => {
			state.isUpperCase = !state.isUpperCase
		},
		handleRound: (state, action: PayloadAction<number>) => {
			state.roundCount = action.payload
		},
		handleCount: (state, action: PayloadAction<number>) => {
			state.passedExerciseCount = action.payload
		},

		startExercise: state => {
			state.isExercise = true
		},
		closeExercise: state => {
			state.isExercise = false
		},
		setImageIndex: (state, action: PayloadAction<number>) => {
			state.imageIndex = action.payload
		},
	},
})

export const selectExercise = (state: RootState): ExerciseState =>
	state.exercise

export const {
	toggleCase,
	handleRound,
	handleCount,
	closeExercise,
	startExercise,
	setImageIndex,
} = exerciseSlice.actions
