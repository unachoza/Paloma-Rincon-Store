import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact/Contact.js";
import Logo from "./Components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
            <Logo />
        </header>
        <Switch>
          <Route exact path="/about" render={(props) => <About {...props} />} />
          <Route exact path="/contact" render={(props) => <Contact {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
