import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

import { Router } from './Router.jsx'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/twich',
    Component: () => <h1>nueva pagina</h1>
  }
]

export default function App () {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  )
}
