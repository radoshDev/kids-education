import { FC, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPokemons } from '../../app/slices/apiSlice'
import {
	handleCount,
	handleRound,
	selectExercise,
	setImageIndex,
	setSyllables,
} from '../../app/slices/exerciseSlice'
import { MAX_COUNT } from '../../constants'
import { getSpeech } from '../../services/getSpeech'
import { Syllable } from '../../services/Syllable'
import { convertToRussish } from '../../utils/convertToRussish'
import { getRandomIndex } from '../../utils/getRandomIndex'
import Salute from './Salute'

const ExerciseCard: FC = () => {
	const dispatch = useAppDispatch()
	const [isMute, setIsMute] = useState(false)
	const [isSpeaking, setIsSpeaking] = useState(false)
	const speechRef = useRef(getSpeech())
	const { passedExerciseCount, isUpperCase, roundCount, syllables } =
		useAppSelector(selectExercise)
	const pokemons = useAppSelector(selectPokemons)
	const syllableIdx = passedExerciseCount

	const nextExercise = (): void => {
		dispatch(handleCount(passedExerciseCount + 1))
		if (passedExerciseCount + 1 === MAX_COUNT) {
			dispatch(handleRound(roundCount + 1))
		}
	}

	const handleNext = (): void => {
		setIsSpeaking(true)
		if (isMute) {
			setTimeout(() => {
				nextExercise()
				setIsSpeaking(false)
			}, 1000)
			return
		}
		const textToSpeak = convertToRussish(syllables[syllableIdx])

		if (!textToSpeak) {
			setTimeout(() => {
				nextExercise()
				setIsSpeaking(false)
			}, 1000)
			return
		}

		speechRef.current.text = textToSpeak
		window.speechSynthesis.speak(speechRef.current)

		speechRef.current.onend = () => {
			setIsSpeaking(false)
			dispatch(handleCount(passedExerciseCount + 1))
			if (passedExerciseCount + 1 === MAX_COUNT) {
				dispatch(handleRound(roundCount + 1))
			}
		}
	}
	const handleNewRound = (): void => {
		const newImageIndex = getRandomIndex(pokemons.length)
		dispatch(setImageIndex(newImageIndex))
		dispatch(handleCount(0))
		dispatch(setSyllables(new Syllable().generateSyllables(MAX_COUNT)))
	}

	const handlePrev = (): void => {
		if (passedExerciseCount === 0) return
		if (passedExerciseCount === MAX_COUNT) {
			dispatch(handleRound(roundCount - 1))
		}
		dispatch(handleCount(passedExerciseCount - 1))
	}

	return (
		<div className="flex-1 flex flex-col items-center mt-2">
			{syllables[syllableIdx] && (
				<p className={`text-[200px] flex-1 ${isUpperCase ? ' uppercase' : ''}`}>
					{syllables[syllableIdx]}
				</p>
			)}
			<Salute isShow={!syllables[syllableIdx]} />
			<div className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 flex gap-4">
				<button
					type="button"
					className="btn border bg-white disabled:shadow-none disabled:text-gray-400"
					disabled={passedExerciseCount === 0}
					onClick={handlePrev}>
					Back
				</button>
				{syllables[syllableIdx] ? (
					<button
						type="button"
						disabled={isSpeaking}
						className="bg-blue-400 disabled:bg-gray-400 btn"
						onClick={handleNext}>
						Next
					</button>
				) : (
					<button
						type="button"
						className="btn bg-green-400"
						onClick={handleNewRound}>
						More
					</button>
				)}
			</div>
		</div>
	)
}

export default ExerciseCard
