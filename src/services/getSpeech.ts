type Lang = 'ru-RU' | 'en-US'

export const getSpeech = (lang: Lang = 'ru-RU'): SpeechSynthesisUtterance => {
	const speech = new SpeechSynthesisUtterance()

	speech.lang = lang
	speech.volume = 0.5
	const voice = window.speechSynthesis
		.getVoices()
		.find(item => item.lang === lang)
	if (!voice) {
		return speech
	}
	speech.voice = voice

	return speech
}
