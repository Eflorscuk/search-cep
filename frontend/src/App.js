import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import Home from './components/pages/Home'

const App = _ => {
  return (
    <Router>
      <Navbar></Navbar>
        <Container>
          <Home></Home>
          <Routes>
            <Route></Route>
          </Routes>
        </Container>
      <Footer></Footer>
    </Router>
  )
}

export default App
