import { FC } from 'react'
import { CgClose } from 'react-icons/cg'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	setExercise,
	selectExercise,
	toggleCase,
} from '../../app/slices/exerciseSlice'

const Actions: FC = () => {
	const { isUpperCase } = useAppSelector(selectExercise)
	const dispatch = useAppDispatch()
	const handleCase = (): void => {
		dispatch(toggleCase())
	}
	const handleClose = (): void => {
		dispatch(setExercise(false))
	}
	return (
		<div>
			<button
				type="button"
				onClick={handleCase}
				className="fixed top-0 right-0 m-2 py-2 px-4 border rounded">
				{isUpperCase ? 'aa' : 'AA'}
			</button>
			<button
				onClick={handleClose}
				type="button"
				className="fixed top-0 left-0 m-2 p-2 bg-red-500 text-white border rounded-full font-bold text-2xl">
				<CgClose />
			</button>
		</div>
	)
}

export default Actions
