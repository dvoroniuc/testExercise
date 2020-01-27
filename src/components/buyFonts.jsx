import React, { Component } from "react";
import apiRequest from "../api/api";

export default class BuyFonts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    apiRequest
      .getRequest(this.props.link.content_endpoint)
      .then(result =>
        this.setState({
          data: result
        })
      )
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        {this.state.data.content}
      </div>
    );
  }
}
