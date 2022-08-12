import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectPokemons } from '../app/slices/apiSlice'
import { setImageIndex, startExercise } from '../app/slices/exerciseSlice'
import { getRandomIndex } from '../utils/getRandomIndex'

const StartBlock: FC = () => {
	const dispatch = useAppDispatch()
	const pokemons = useAppSelector(selectPokemons)
	const handleStart = (): void => {
		const imageIndex = getRandomIndex(pokemons.length)
		dispatch(setImageIndex(imageIndex))
		dispatch(startExercise())
	}
	return (
		<div>
			<button
				type="button"
				className="btn bg-blue-400 text-2xl uppercase"
				onClick={handleStart}>
				Start
			</button>
		</div>
	)
}

export default StartBlock
