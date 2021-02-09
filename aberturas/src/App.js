import React from 'react';
import './components/styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import VentanaPage from './pages/productIndividual/VentanaPage'
import PuertaPage from './pages/productIndividual/PuertaPage'
import VentiluzPage from './pages/productIndividual/VentiluzPage'
import NotFound from './pages/NotFound'

function App() {

    return (
        <>
            <Router> 
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/products/ventana' component={VentanaPage} />
                    <Route exact path='/products/puerta-corrediza' component={PuertaPage} />
                    <Route exact path='/products/ventiluz' component={VentiluzPage} />
                    <Route path='/' exact component={Home} />
                    <Route exact component={NotFound} />
                </Switch> 
            </Router>
        </>
    )
}

export default App;