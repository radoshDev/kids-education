import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectWord, toggleCase } from '../app/slices/wordSlice'

const Actions: FC = () => {
	const { isUpperCase } = useAppSelector(selectWord)
	const dispatch = useAppDispatch()
	const handleCase = (): void => {
		dispatch(toggleCase())
	}
	return (
		<div>
			<button
				type="button"
				onClick={handleCase}
				className="fixed top-0 right-0 m-2 py-2 px-4 border rounded">
				{isUpperCase ? 'aa' : 'AA'}
			</button>
		</div>
	)
}

export default Actions
