import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/molecules/topBat/TopBar'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginPage />
  );
}

export default App
