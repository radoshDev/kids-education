import { FC, useEffect } from 'react'
import { getPokemons } from './api/pokemonApi'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { setPokemons } from './app/slices/apiSlice'
import { selectExercise } from './app/slices/exerciseSlice'
import Exercise from './components/Exercise/Exercise'
import StartBlock from './components/StartBlock'
import { POKEMONS_STORAGE_KEY } from './constants'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const { isExercise } = useAppSelector(selectExercise)

	useEffect(() => {
		if (!localStorage.getItem(POKEMONS_STORAGE_KEY)) {
			getPokemons()
				.then(data => {
					console.log(data)
					dispatch(setPokemons(data))
					localStorage.setItem(POKEMONS_STORAGE_KEY, JSON.stringify(data))
				})
				.catch(error => {
					console.log(error)
				})
		}
	}, [])

	return (
		<div className="p-2 md:p-6 pb-20 h-screen flex items-center justify-center">
			{isExercise ? <Exercise /> : <StartBlock />}
		</div>
	)
}

export default App
