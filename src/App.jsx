import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicePage from './pages/servicePage'

function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/service' element={<ServicePage/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
