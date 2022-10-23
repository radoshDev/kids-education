import { consonants, exclusions, vowels } from '../data/letters'
import { getRandomIndex } from '../utils/getRandomIndex'

export class Syllable {
	syllablesList: string[] = []

	vowels = vowels

	consonants = consonants

	exclusions = exclusions

	#generateSyllable(): string {
		const vowelIdx = getRandomIndex(this.vowels.length)
		const consonantIdx = getRandomIndex(this.consonants.length)
		if (Math.random() > 0.5) {
			return this.consonants[consonantIdx] + this.vowels[vowelIdx]
		}

		return this.vowels[vowelIdx] + this.consonants[consonantIdx]
	}

	getSyllable(): string {
		const syllable = this.#generateSyllable()
		const isDuplicate = this.syllablesList.includes(syllable)
		if (isDuplicate || this.exclusions.includes(syllable)) {
			return this.getSyllable()
		}
		return syllable
	}

	generateSyllables(count: number): string[] {
		this.syllablesList = []
		for (let i = 0; i < count; i++) {
			this.syllablesList.push(this.getSyllable())
		}
		return this.syllablesList
	}
}
