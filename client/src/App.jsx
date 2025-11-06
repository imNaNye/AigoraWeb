import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BrochureForm from './pages/BrochureForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/introduction/brochure" element={<BrochureForm />} />
      </Routes>
    </Router>
  )
}

export default App
