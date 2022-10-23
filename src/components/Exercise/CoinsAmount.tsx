import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectExercise } from '../../app/slices/exerciseSlice'
import Coin from '../ui/Coin'

const CoinsAmount: FC = () => {
	const { earned } = useAppSelector(selectExercise)
	return (
		<div className="w-[100px]">
			<Coin count={earned} />
		</div>
	)
}

export default CoinsAmount
