export type Pokemon = {
	name: string
	dreamworld: string
}

export type ExerciseState = {
	syllables: string[]
	imageIndex: number
	isExercise: boolean
	isMute: boolean
	isUpperCase: boolean
	round: number
	passedExerciseInRound: number
	cost: number
	earned: number
}

export type ApiState = {
	pokemons: Pokemon[]
}
