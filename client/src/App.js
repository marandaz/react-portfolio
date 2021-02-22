import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import Containers from "./components/containers";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";


function App() {
  return (
    <Router>
      <>
      <Nav />
        <Containers>
          {/* <Nav /> */}
          <Route exact path="/react-portfolio/" component={Home} />
          <Route exact path="/react-portfolio/about" component={About} />
          <Route exact path="/react-portfolio/projects" component={Projects} />
          <Route path="/react-portfolio" component={Resume} />
          <Footer />
        </Containers>
      </>
    </Router>
  );
}

export default App;
