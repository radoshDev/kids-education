import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectExercise } from '../../app/slices/exerciseSlice'
import { MAX_COUNT } from '../../constants'

const Counter: FC = () => {
	const { passedExerciseInRound } = useAppSelector(selectExercise)
	const percent = (passedExerciseInRound / MAX_COUNT) * 100
	return (
		<div className="mt-4">
			<div className="w-[300px] h-[20px] bg-gray-200 rounded-full overflow-hidden">
				{passedExerciseInRound > 0 && (
					<div
						className="bg-blue-600 h-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full flex items-center justify-center"
						style={{ width: `${percent}%` }}>
						{passedExerciseInRound}
					</div>
				)}
			</div>
		</div>
	)
}

export default Counter
