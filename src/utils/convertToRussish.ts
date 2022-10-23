export const convertToRussish = (text: string): string => {
	const replaceList: Record<string, string> = {
		и: 'ы',
		е: 'э',
		і: 'и',
	}
	const exceptions = ['ця', 'до', 'со', 'ко', 'щи', 'фи', 'ші']

	if (exceptions.includes(text)) return ''

	const letters = text.split('').map(chapter => replaceList[chapter] || chapter)
	return letters.join('')
}
