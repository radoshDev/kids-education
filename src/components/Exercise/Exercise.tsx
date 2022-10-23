import { FC } from 'react'
import Actions from './Actions'
import Counter from './Counter'
import CoinsAmount from './CoinsAmount'
import ExerciseCard from './ExerciseCard'

const Exercise: FC = () => {
	return (
		<div className="flex justify-between items-center flex-col text-center max-w-5xl w-full h-full relative mx-auto">
			<Actions />
			<CoinsAmount />
			<Counter />
			<ExerciseCard />
		</div>
	)
}

export default Exercise
