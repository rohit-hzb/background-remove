import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCradit from './pages/BuyCradit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/result' element={<Result/>}/>
       <Route path='/buy' element={<BuyCradit/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
