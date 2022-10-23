import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectPokemons } from '../../app/slices/apiSlice'
import { selectExercise } from '../../app/slices/exerciseSlice'
import { getSpeech } from '../../services/getSpeech'

type Props = {
	isShow: boolean
}

const Salute: FC<Props> = ({ isShow }) => {
	const pokemons = useAppSelector(selectPokemons)
	const { imageIndex } = useAppSelector(selectExercise)
	const selectedPokemon = pokemons[imageIndex]

	const speak = (): void => {
		if (!window.speechSynthesis.speaking) {
			const speech = getSpeech('en-US')
			speech.text = selectedPokemon.name
			speech.rate = 0.7
			window.speechSynthesis.speak(speech)
		}
	}

	return (
		<div
			className={`flex-1 flex items-center flex-col justify-center ${
				isShow ? '' : 'hidden'
			}`}>
			<div role="button" onClick={speak}>
				<img
					className="max-h-[250px] h-full object-contain"
					src={selectedPokemon.dreamworld}
					alt={selectedPokemon.name}
					width={200}
					height={200}
				/>
			</div>
			<p className="text-2xl font-bold capitalize my-3">
				{selectedPokemon.name}
			</p>
		</div>
	)
}

export default Salute
