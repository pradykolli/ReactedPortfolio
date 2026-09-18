import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './Components/NavBar/NavBar';
import ChatBot from './Components/Chatbot/ChatBot';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar></NavBar>
        </Col>
      </Row>
      <ChatBot></ChatBot>
    </Container>
  );
}

export default App;
