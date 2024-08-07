import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Row>
      <Col>Profile</Col>
    </Row>
  );
}

export default App;
