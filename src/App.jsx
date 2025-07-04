import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Loginpage from './pages/Loginpage'

  function App(){


  return (
    <>
    <Routes>
     <Route path='/signup-page' element={ <Signup/>}/>
     <Route path='/login' element={ <Loginpage/>}/>
    </Routes>
    </>
  )

}
export default App
