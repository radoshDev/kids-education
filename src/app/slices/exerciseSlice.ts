import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExerciseState } from '../../types/store'
import { RootState } from '../store'

const initialState: ExerciseState = {
	syllables: [],
	isMute: false,
	imageIndex: 0,
	isExercise: false,
	isUpperCase: true,
	round: 0,
	cost: 1,
	earned: 0,
	passedExerciseInRound: 0,
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
		toggleMute: state => {
			state.isMute = !state.isMute
		},
		nextRound: state => {
			state.round += 1
		},
		refreshExercise: () => initialState,
		setExercise: (state, action: PayloadAction<boolean>) => {
			state.isExercise = action.payload
		},
		changeExerciseCount: (state, action: PayloadAction<number>) => {
			state.passedExerciseInRound = action.payload
		},
		changeEarned: (state, action: PayloadAction<number>) => {
			state.earned = action.payload
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
	nextRound,
	refreshExercise,
	setExercise,
	setImageIndex,
	setSyllables,
	toggleCase,
	toggleMute,
} = exerciseSlice.actions
