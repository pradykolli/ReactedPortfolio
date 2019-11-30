import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar></NavBar>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
