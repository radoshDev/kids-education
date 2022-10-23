import { FC, useMemo } from 'react'
import Actions from './Actions'
import Counter from './Counter'
import CoinsAmount from './CoinsAmount'
import ExerciseCard from './ExerciseCard'
import { generateSyllables } from '../../utils/generateSyllables'
import { MAX_COUNT } from '../../constants'
import { useAppSelector } from '../../app/hooks'
import { selectExercise } from '../../app/slices/exerciseSlice'

const Exercise: FC = () => {
	const { round } = useAppSelector(selectExercise)
	const syllables = useMemo(() => generateSyllables(MAX_COUNT), [round])
	return (
		<div className="flex justify-between items-center flex-col text-center max-w-5xl w-full h-full relative mx-auto">
			<Actions />
			<CoinsAmount />
			<Counter />
			<ExerciseCard words={syllables} />
		</div>
	)
}

export default Exercise
