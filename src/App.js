// import 'semantic-ui-css/semantic.min.css'
import { Container, Row } from 'react-bootstrap';
import "./App.css"
import AppRouter from "./config/Router.js"


function App() {
  return (
    <Container fluid>
      <Row> 
        <AppRouter />

      </Row>
    </Container>

  );
}

export default App;
