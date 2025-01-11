import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import TeamPage from './pages/TeamPage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/service' element={<ServicePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/team' element={<TeamPage/>} />
     </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
