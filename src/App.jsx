import { lazy, Suspense } from 'react'

import './App.css'
/* import HomePage from './pages/Home.jsx' */
/* import AboutPage from './pages/About.jsx' */
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
