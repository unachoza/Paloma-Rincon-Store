import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./Components/About.js"

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
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
