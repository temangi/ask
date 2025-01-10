import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
