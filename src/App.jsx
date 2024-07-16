import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'

import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export default function App () {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}
