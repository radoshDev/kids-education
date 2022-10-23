export type Pokemon = {
	name: string
	dreamworld: string
}

export type ExerciseState = {
	syllables: string[]
	imageIndex: number
	isExercise: boolean
	isUpperCase: boolean
	isMute: boolean
	roundCount: number
	passedExerciseCount: number
	cost: number
}

export type ApiState = {
	pokemons: Pokemon[]
}
