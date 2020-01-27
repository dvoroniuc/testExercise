import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Links from "./links";
import "./style.scss";
import apiRequest from "../api/api";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    apiRequest
      .getRequest("tabs")
      .then(result => this.setState({ data: result }))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs="6">
              <h2>Please select one font</h2>
            </Col>
            <Col xs="6">
              <Links />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
