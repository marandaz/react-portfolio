import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/nav";
// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resumes/Resume";
import Footer from "./components/footer";
import Container from "./components/container";

function App() {
  return (
    <Router>
      <>
        <Container>
          <NavTabs />
          {/* <Route exact path="/react-portfolio" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Footer /> 
        </Container> 
      </>
    </Router>
  );
}

export default App;
