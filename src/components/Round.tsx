import { FC } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectWord } from '../app/slices/wordSlice'

const Round: FC = () => {
	const { roundCount } = useAppSelector(selectWord)
	return <div className="text-2xl text-green-600 mb-4">Round: {roundCount}</div>
}

export default Round
