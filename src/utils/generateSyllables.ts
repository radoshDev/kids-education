import { Syllable } from '../services/Syllable'

export const generateSyllables = (length: number): string[] => {
	const syllable = new Syllable()
	const syllables = []
	for (let i = 0; i < length; i++) {
		syllables.push(syllable.getSyllable())
	}
	return syllables
}
