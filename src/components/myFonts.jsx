import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Cube from "./cube";
import apiRequest from "../api/api";

export default class myFonts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstcube: {},
      secondcube: {},
      thirdcube: {}
    };
  }

  componentDidMount() {
    apiRequest
      .getRequest("fonts_a" /*this.props.link.content_endpoint*/)
      .then(result =>
        this.setState({
          firstcube: result.content[0],
          secondcube: result.content[1],
          thirdcube: result.content[2]
        })
      )
      .catch(e => console.log(e));
  }

  render() {
    return (
      <>
        <Row>
          <Col sm="4">
            <Cube
              color={this.state.firstcube.color}
              abbr={this.state.firstcube.abbr}
              label={this.state.firstcube.label}
              id={this.state.firstcube.id}
            />
          </Col>
          <Col sm="8">
            <Cube
              color={this.state.secondcube.color}
              abbr={this.state.secondcube.abbr}
              label={this.state.secondcube.label}
              id={this.state.secondcube.id}
            />
            <Cube
              color={this.state.thirdcube.color}
              abbr={this.state.thirdcube.abbr}
              label={this.state.thirdcube.label}
              id={this.state.thirdcube.id}
            />
          </Col>
        </Row>
      </>
    );
  }
}
