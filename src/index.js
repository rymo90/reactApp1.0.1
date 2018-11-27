import React from "react";
import ReactDOM from "react-dom";
import StickyFooter from "react-sticky-footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Carousel
} from "react-bootstrap";
import Current from "./components/Current";
import Video from "./components/Video";
import News from "./components/News";
import Event from "./components/Event";
import "./styles.css";
const Footer = () => {
  return (
    <div className="Footer">
      <h5>Adress</h5>
      <p>toppVägen 2</p>
      <p>145 70 Tumba</p>
      <p />
    </div>
  );
};
const Start = () => {
  return (
    <Router>
      <div className="Main">
        <Navbar className="Header">
          <Navbar.Header>
            <Navbar.Brand>
              <a className="BrandName" href="/">
                BrandName
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="News">
              News
            </NavItem>
            <NavItem eventKey={2} href="Video">
              Videos
            </NavItem>
            <NavItem eventKey={3} href="Event">
              Events
            </NavItem>
          </Nav>
        </Navbar>

        <div className="Content">
          <Switch>
            <Route path="/" exact component={Current} />
            <Route path="/Video/" component={Video} />
            <Route path="/News/" component={News} />
            <Route path="/Event/" component={Event} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMain: true };
  }
  render() {
    return (
      <div className="App">
        <Start />

        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
