import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Container from 'react-bootstrap/Container'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navigation from './pages/partials/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import RandomCatPage from './pages/RandomCatPage'

import './assets/scss/App.scss'
import CatBreed from './pages/CatBreed'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<BrowserRouter basename="">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/random-cat" element={<RandomCatPage />} />
						<Route path="/random-cat-breed" element={<CatBreed />} />

						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</Container>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</div>
	)
}

export default App

