import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScoreHistoryContextProvider } from './store/score-context'
import RootLayout from './layout/RootLayout'
import Welcome from './pages/Welcome'
import GuessNumberGame from './pages/GuessNumberGame'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { AuthContextProvider } from './store/auth-context'

function App() {
  return (
    <AuthContextProvider>
      <ScoreHistoryContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Welcome />} />
              <Route path="game" element={<GuessNumberGame />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ScoreHistoryContextProvider>
    </AuthContextProvider>
  )
}

export default App;
