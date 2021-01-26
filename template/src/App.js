import React from 'react'
import Header from './Components/HomePage/Header'
import Footer from './Components/HomePage/Footer'
import Content from './Components/HomePage/Content'
import Features from './Components/HomePage/Features'
import Contact from './Components/Contact/Contact'
import './Components/Packages/bootstrap-4.5.3-dist/css/bootstrap.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        
        <Route path="/" exact component={Content} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Features" component={Features} />
      </Router>
      
      <Footer/>
      
      
      
      
    </div>
  )
}

export default App
