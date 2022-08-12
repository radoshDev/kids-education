import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import { exerciseSlice } from './slices/exerciseSlice'

export const store = configureStore({
	reducer: {
		[exerciseSlice.name]: exerciseSlice.reducer,
		[apiSlice.name]: apiSlice.reducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
