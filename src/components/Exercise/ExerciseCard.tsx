import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectPokemons } from '../../app/slices/apiSlice'
import {
	nextRound,
	changeExerciseCount,
	selectExercise,
	setImageIndex,
	changeEarned,
	setSyllables,
} from '../../app/slices/exerciseSlice'
import { MAX_COUNT } from '../../constants'
import useSpeechSynthesis from '../../hooks/useSpeechSynthesis'
import { Syllable } from '../../services/Syllable'
import { convertToRussish } from '../../utils/convertToRussish'
import { getRandomIndex } from '../../utils/getRandomIndex'
import Salute from './Salute'

const ExerciseCard: FC = () => {
	const dispatch = useAppDispatch()
	const { speak, voices, speaking } = useSpeechSynthesis()
	const {
		passedExerciseInRound: wordIdx,
		isUpperCase,
		earned,
		cost,
		syllables,
	} = useAppSelector(selectExercise)
	const pokemons = useAppSelector(selectPokemons)

	const nextSlide = (): void => {
		dispatch(changeExerciseCount(wordIdx + 1))
		if (wordIdx + 1 === MAX_COUNT) {
			dispatch(changeEarned(earned + cost))
		}
	}

	const handleNext = (): void => {
		speak({
			text: convertToRussish(syllables[wordIdx]),
			voice: voices.find(voice => voice.lang === 'ru-RU'),
			onEnd: nextSlide,
		})
	}
	const handleNextRound = (): void => {
		const newImageIndex = getRandomIndex(pokemons.length)
		dispatch(setImageIndex(newImageIndex))
		dispatch(changeExerciseCount(0))
		dispatch(setSyllables(new Syllable().generateSyllables(MAX_COUNT)))
		dispatch(nextRound())
	}

	const handlePrev = (): void => {
		if (wordIdx === 0) return
		if (wordIdx === MAX_COUNT) {
			dispatch(changeEarned(earned - cost))
		}
		dispatch(changeExerciseCount(wordIdx - 1))
	}

	return (
		<div className="flex-1 flex flex-col items-center mt-2">
			{syllables[wordIdx] && (
				<p className={`text-[200px] flex-1 ${isUpperCase ? ' uppercase' : ''}`}>
					{syllables[wordIdx]}
				</p>
			)}
			<Salute isShow={!syllables[wordIdx]} />
			<div className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 flex gap-4">
				<button
					type="button"
					className="btn border bg-white disabled:shadow-none disabled:text-gray-400"
					disabled={wordIdx === 0}
					onClick={handlePrev}>
					Back
				</button>
				{syllables[wordIdx] ? (
					<button
						type="button"
						disabled={speaking}
						className="bg-blue-400 disabled:bg-gray-400 btn"
						onClick={handleNext}>
						Next
					</button>
				) : (
					<button
						type="button"
						className="btn bg-green-400"
						onClick={handleNextRound}>
						More
					</button>
				)}
			</div>
		</div>
	)
}

export default ExerciseCard
