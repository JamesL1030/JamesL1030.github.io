import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'James Lucas',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hi, I\'m James.',
        subTitle: 'I love to build amazing apps.',
        text: 'Checkout my projects below.'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="myContainer" fluid={true}>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand><span className="cWhite">James Lucas</span></Navbar.Brand>
            <Navbar.Toggle className="border-0" araiocontrols="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="myNav">
                <Link className="nav-link" to="/"><span className="cWhite">Home</span></Link>
                <Link className="nav-link" to="/about"><span className="cWhite">About</span></Link>
                <Link className="nav-link" to="/contact"><span className="cWhite">Contact</span></Link> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>     
          <Routes>
            <Route  path="/" exact element={ <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" element={ <AboutPage title={this.state.about.title} />} />
            <Route path="/contact" element={ <ContactPage title={this.state.contact.title} />} />   
          </Routes>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;

