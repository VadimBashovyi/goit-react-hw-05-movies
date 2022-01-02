import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import { Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Container from './components/Container'
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner'

import 'react-toastify/dist/ReactToastify.css'
const HomePage = lazy(() => import('./pages/HomePage'))

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}
