import { useEffect, useState } from 'react'

type SpeakOptions = {
	pitch?: number
	rate?: number
	text?: string
	voice?: SpeechSynthesisVoice | null
	volume?: number
	onEnd?: () => void
}

type UseSpeechSynthesis = () => {
	supported: boolean
	speak: (args?: SpeakOptions) => void
	speaking: boolean
	cancel: () => void
	voices: SpeechSynthesisVoice[]
}

const useSpeechSynthesis: UseSpeechSynthesis = () => {
	const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
	const [speaking, setSpeaking] = useState(false)
	const [supported, setSupported] = useState(false)

	const getVoices = (): void => {
		// Firefox seems to have voices upfront and never calls the
		// voiceschanged event
		let voiceOptions = window.speechSynthesis.getVoices()
		if (voiceOptions.length > 0) {
			setVoices(voiceOptions)
			return
		}

		window.speechSynthesis.onvoiceschanged = event => {
			voiceOptions = (event.target as SpeechSynthesis).getVoices()
			setVoices(voiceOptions)
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && window.speechSynthesis) {
			setSupported(true)
			getVoices()
		}
	}, [])

	const speak = (args: SpeakOptions = {}): void => {
		const {
			voice = null,
			text = '',
			rate = 1,
			pitch = 1,
			volume = 1,
			onEnd,
		} = args
		if (!supported) return
		setSpeaking(true)
		// Firefox won't repeat an utterance that has been
		// spoken, so we need to create a new instance each time
		const handleEnd = (): void => {
			setSpeaking(false)
			if (onEnd) {
				onEnd()
			}
		}
		console.log(voice)

		const utterance = new window.SpeechSynthesisUtterance()
		utterance.voice = voice
		utterance.text = text
		utterance.onend = handleEnd
		utterance.rate = rate
		utterance.pitch = pitch
		utterance.volume = volume
		window.speechSynthesis.speak(utterance)
	}

	const cancel = (): void => {
		if (!supported) return
		setSpeaking(false)
		window.speechSynthesis.cancel()
	}

	return {
		supported,
		speak,
		speaking,
		cancel,
		voices,
	}
}

export default useSpeechSynthesis
