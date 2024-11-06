import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ScoreHistoryContextProvider } from './store/score-context';
import RootLayout from './layout/RootLayout';
import Welcome from './pages/Welcome';
import GuessNumberGame from './pages/GuessNumberGame';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { AuthContext, AuthContextProvider } from './store/auth-context';
import { useContext } from 'react';

function Protected({children}) {
  const {isLoggedIn} = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthContextProvider>
      <ScoreHistoryContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Welcome />} />
              <Route 
                path="game" 
                element={
                  <Protected>
                      <GuessNumberGame />
                  </Protected>
                } />
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
