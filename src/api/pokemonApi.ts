import axios from 'axios'
import { Pokemon } from '../types/store'

type PokemonResponse = {
	data: {
		pokemons: {
			results: Pokemon[]
		}
	}
}

const GET_POKEMONS = `query getPokemons {
  pokemons(limit: 200, offset: 0) {
    results{
      name
      dreamworld
    }
  }
}`

export const getPokemons = async (): Promise<Pokemon[]> => {
	const result = await axios.post<PokemonResponse>(
		'https://graphql-pokeapi.graphcdn.app/',
		{
			query: GET_POKEMONS,
		}
	)
	return result.data.data.pokemons.results
}
