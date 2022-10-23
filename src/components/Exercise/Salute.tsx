import { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectPokemons } from '../../app/slices/apiSlice'
import { selectExercise } from '../../app/slices/exerciseSlice'
import useSpeechSynthesis from '../../hooks/useSpeechSynthesis'

type Props = {
	isShow: boolean
}

const Salute: FC<Props> = ({ isShow }) => {
	const pokemons = useAppSelector(selectPokemons)
	const { imageIndex } = useAppSelector(selectExercise)
	const { speak, speaking } = useSpeechSynthesis()
	const selectedPokemon = pokemons[imageIndex]
	const handleSpeak = (): void => {
		if (speaking) return

		speak({
			rate: 0.7,
			text: selectedPokemon.name,
		})
	}

	return (
		<div
			className={`flex-1 flex items-center flex-col justify-center ${
				isShow ? '' : 'hidden'
			}`}>
			<div role="button" onClick={handleSpeak}>
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
