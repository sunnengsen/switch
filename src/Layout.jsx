import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './component/Home'
import About from './component/About'
import Faq from './component/Faq'
import Place from './component/Place'

export default function Layout() {
  return (
    <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/faq" component={Faq} />
                <Route path="/place" component={Place} />
            </Switch>
        </Router>
  )
}
