import { FC } from 'react'
import Actions from './components/Actions'
import Card from './components/Card'
import Counter from './components/Counter'
import Round from './components/Round'

const App: FC = () => {
	return (
		<div className="flex justify-between items-center flex-col h-screen text-center p-8">
			<Actions />
			<Round />
			<Counter />
			<Card />
		</div>
	)
}

export default App
