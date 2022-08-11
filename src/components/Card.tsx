import { FC, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { nextCount, nextRound, selectWord } from '../app/slices/wordSlice'
import { MAX_COUNT } from '../constants'
import { Syllable } from '../services/Syllable'

const Card: FC = () => {
	const dispatch = useAppDispatch()
	const [syllable, setSyllable] = useState('')
	const syllableRef = useRef(new Syllable())
	const { count, isUpperCase } = useAppSelector(selectWord)

	useEffect(() => {
		setSyllable(syllableRef.current.getSyllable())
	}, [])

	const handleNext = (): void => {
		console.log(window.speechSynthesis)

		setSyllable(syllableRef.current.getSyllable())
		if (count === MAX_COUNT) {
			dispatch(nextCount(1))
			dispatch(nextRound())
			return
		}
		dispatch(nextCount(count + 1))
	}
	return (
		<div className="flex-1 flex flex-col items-center mt-5">
			<p className={`text-[200px] flex-1 ${isUpperCase ? ' uppercase' : ''}`}>
				{syllable}
			</p>
			<button
				type="button"
				className="bg-blue-400 px-6 py-2 shadow-md rounded text-xl uppercase"
				onClick={handleNext}>
				Next
			</button>
		</div>
	)
}

export default Card
