import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./Pages/About.js"
import Contact from "./Pages/Contact/Contact.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
          Working React APP by Arianna Choza
      </header>
        <Switch>
        <Route
            exact
            path="/about"
            render={(props) => <About {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
