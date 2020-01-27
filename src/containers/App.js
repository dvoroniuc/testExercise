import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "../components/headerContainer";
import MyFonts from "../components/myFonts";
import BuyFonts from "../components/buyFonts";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ContentContainer from "./contentContainer";
import apiRequest from "../api/api";

export default class App extends Component {
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
      <BrowserRouter>
        <div className="App">
          <HeaderContainer />
          <ContentContainer>
            <Redirect from="/" to="myfonts" />
            <Route
              render={props => <MyFonts {...props} link={this.state.data[0]} />}
              path="/myfonts"
            />
            <Route
              render={props => (
                <BuyFonts {...props} link={this.state.data[1]} />
              )}
              path="/buyfonts"
            />
          </ContentContainer>
        </div>
      </BrowserRouter>
    );
  }
}
