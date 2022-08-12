export type Pokemon = {
	name: string
	dreamworld: string
}

export type ExerciseState = {
	imageIndex: number
	isExercise: boolean
	isUpperCase: boolean
	roundCount: number
	passedExerciseCount: number
	cost: number
}

export type ApiState = {
	pokemons: Pokemon[]
}
