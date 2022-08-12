export const convertToRussish = (text: string): string => {
	const replaceList: Record<string, string> = {
		и: 'ы',
		е: 'э',
		і: 'и',
	}
	const exceptions = ['ця', 'до', 'со', 'ко', 'щи', 'фи', 'ші']
	if (exceptions.includes(text)) return ''
	const updatedArray = text.split('').map(chapter => {
		if (Object.keys(replaceList).includes(chapter)) {
			return replaceList[chapter]
		}
		return chapter
	})

	return updatedArray.join('')
}
