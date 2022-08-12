import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectExercise } from '../../app/slices/exerciseSlice'
import Coin from '../ui/Coin'

const Round: FC = () => {
	const { roundCount, cost } = useAppSelector(selectExercise)
	return (
		<div className="w-[100px]">
			<Coin count={roundCount * cost} />
		</div>
	)
}

export default Round
