import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExerciseState } from '../../types/store'
import { RootState } from '../store'

const initialState: ExerciseState = {
	isMute: false,
	imageIndex: 0,
	isExercise: false,
	isUpperCase: true,
	round: 1,
	cost: 1,
	earned: 0,
	passedExerciseInRound: 0,
}

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState,
	reducers: {
		toggleCase: state => {
			state.isUpperCase = !state.isUpperCase
		},
		toggleMute: state => {
			state.isMute = !state.isMute
		},
		nextRound: state => {
			state.round += 1
		},
		changeExerciseCount: (state, action: PayloadAction<number>) => {
			state.passedExerciseInRound = action.payload
		},
		changeEarned: (state, action: PayloadAction<number>) => {
			state.earned = action.payload
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
	changeEarned,
	changeExerciseCount,
	closeExercise,
	nextRound,
	startExercise,
	setImageIndex,
	toggleCase,
	toggleMute,
} = exerciseSlice.actions
