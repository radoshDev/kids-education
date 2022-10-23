import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectPokemons } from '../app/slices/apiSlice'
import {
	setImageIndex,
	setExercise,
	refreshExercise,
	selectExercise,
	setSyllables,
} from '../app/slices/exerciseSlice'
import { MAX_COUNT } from '../constants'
import { Syllable } from '../services/Syllable'
import { getRandomIndex } from '../utils/getRandomIndex'

const StartBlock: FC = () => {
	const dispatch = useAppDispatch()
	const pokemons = useAppSelector(selectPokemons)
	const { passedExerciseCount, roundCount } = useAppSelector(selectExercise)

	const isStartedRound = passedExerciseCount > 0 || roundCount > 0

	const handleNewRound = (): void => {
		const imageIndex = getRandomIndex(pokemons.length)
		const syllablesList = new Syllable().generateSyllables(MAX_COUNT)
		dispatch(setImageIndex(imageIndex))
		dispatch(refreshExercise())
		dispatch(setSyllables(syllablesList))
		dispatch(setExercise(true))
	}

	const handleContinue = (): void => {
		dispatch(setExercise(true))
	}

	return (
		<div className="flex gap-4">
			<button
				type="button"
				className="btn bg-blue-400 text-2xl uppercase"
				onClick={handleNewRound}>
				{isStartedRound ? 'New Round' : 'Start'}
			</button>
			{isStartedRound && (
				<button
					type="button"
					className="btn bg-yellow-400 text-2xl uppercase"
					onClick={handleContinue}>
					Continue
				</button>
			)}
		</div>
	)
}

export default StartBlock
