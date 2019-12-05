import React, { Component } from "react";
import styled from "styled-components";
import QrReader from "react-qr-reader";

const Container = styled.div`
  width: 350;
  height: 350;
`;

class App extends Component {
  state = {
    scanResult: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        scanResult: data
      });
    }
  };

  handleError = err => {
    console.log(err);
  };

  render() {
    return (
      <Container>
        <QrReader
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: 300, height: 300 }}
        />
        <p>{this.state.scanResult}</p>
      </Container>
    );
  }
}

export default App;
