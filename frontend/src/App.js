import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import Home from './components/pages/Home'
import SearchNumber from './components/pages/SearchNumber'

const App = _ => {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/seachcepnumber" element={<SearchNumber />} />
          </Routes>
        </Container>
        <Footer></Footer>
    </Router>
  )
}

export default App
