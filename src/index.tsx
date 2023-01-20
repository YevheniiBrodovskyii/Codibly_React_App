import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={setupStore()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)