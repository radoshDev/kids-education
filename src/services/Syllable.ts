import { consonants, exclusions, vowels } from '../data/letters'
import { getRandomIndex } from '../utils/getRandomIndex'

export class Syllable {
	vowels = vowels

	consonants = consonants

	exclusions = exclusions

	used: Record<string, number> = {}

	#generateSyllable(): string {
		const vowelIdx = getRandomIndex(this.vowels.length)
		const consonantIdx = getRandomIndex(this.consonants.length)
		const syllable = this.consonants[consonantIdx] + this.vowels[vowelIdx]

		return syllable
	}

	getSyllable(): string {
		const syllable = this.#generateSyllable()
		const isThreeTime = this.used[syllable] === 3
		if (isThreeTime || this.exclusions.includes(syllable)) {
			return this.getSyllable()
		}
		this.used[syllable] = (this.used[syllable] ?? 0) + 1
		return syllable
	}

	generateSyllables(count: number): string[] {
		const syllables = []
		for (let i = 0; i < count; i++) {
			syllables.push(this.getSyllable())
		}
		return syllables
	}
}
