import './App.css';
import './style/landingPage.css';
import NavigationBar from './components/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <div className="border intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>Nonton Gratis Modal Kuota</Col>
            </Row>
          </Container>
        </div>
      </div>
      {/*end intro section */}
    </>
  );
}

export default App;
