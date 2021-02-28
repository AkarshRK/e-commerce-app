import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductInfoContainer from "./containers/ProductInfoContainer";
import CartContainer from "./containers/CartContainer";
import './App.scss';
import Aux from "./hoc/_Aux";
import { Row, Col, Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Aux>
        <Container>
          <BrowserRouter>
            <Row >
              <Col md={1}>
                  <Link to="/">Home</Link>
              </Col>
              <Col md={1}>
                <Link to="/cart">Cart</Link>
              </Col>
            </Row>
            <Switch>
              <Route path="/" component={HomeContainer} exact />
              <Route path="/product/:id" component={ProductInfoContainer} exact />
              <Route path="/cart" component={CartContainer} exact />
            </Switch>
          </BrowserRouter>
        </Container>
      </Aux>
    );
  }
}

export default App;
