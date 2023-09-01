import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'


const queryClient = new QueryClient({
	defaultOptions:{
		queries: {
			refetchOnWindowFocus: false,
		}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<App />
			</HashRouter>
		</QueryClientProvider>
	</React.StrictMode>,
)

// import {HashRouter} from 'react-router-dom'
// Instead of:	 https://localhost:5173/random-cat
// Have:		https://localhost:5173/#/random-cat
