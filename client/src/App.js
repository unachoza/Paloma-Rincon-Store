import React, {useEffect, useState} from 'react'
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Logo from "./Components/Logo/Logo";
import ProductList from './Components/ProductList/ProductList'


const App = () => {
  const [products, setProducts] = useState([])
  useEffect( () => {
   async function fetchData () {
      try {
        const response = await fetch('http://localhost:8001/products');
        const data = await response.json();
        // this.setState({ simpsons: data });
        console.log({ data })
        setProducts(data)
      } catch (error) {
        console.log('there was an error', error);
      }
    }
    fetchData();
  },
 [])

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Logo />
        </header>
        <Switch>
        <Route exact path="/" render={(props) => <ProductList {...props} products={products} />} />
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
