import { FC } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectWord } from '../app/slices/wordSlice'
import { MAX_COUNT } from '../constants'

const Counter: FC = () => {
	const { count } = useAppSelector(selectWord)
	return (
		<div className="text-2xl">
			{count} / {MAX_COUNT}
		</div>
	)
}

export default Counter
