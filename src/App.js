import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './router/home/Home'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Approuter from './router/approuter'
import Footer from './components/footer/Footer'
import SinglePro from './router/single-pro/SinglePro'
import Cartrouter from './router/cartrouter'

function App() {
  return (
    <div className='exam-app'>
      <Router>
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/approuter' component={Approuter}/>
          <Route path='/cartrouter' component={Cartrouter}/>
          <Route path='/singlePro/:id' component={SinglePro}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App