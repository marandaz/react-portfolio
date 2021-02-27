import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/nav";
// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <>
        <div>
          <NavTabs />
          {/* <Route exact path="/react-portfolio" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/portfolio" component={Resume} />
          <Footer /> 
        </div> 
      </>
    </Router>
  );
}

export default App;
