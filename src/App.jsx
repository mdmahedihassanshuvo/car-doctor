import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Pages/Shared/Footer/Footer'
import Header from './Components/Pages/Shared/Header/Header'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
