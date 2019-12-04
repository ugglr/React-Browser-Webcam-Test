import React from "react";
import styled from "styled-components";
import ReactiveQR from "reactive-qr";

const CameraContainer = styled.div`
  width: 300;
  height: 300;
`;

function App() {
  return (
    <>
      Hello from react!
      <CameraContainer>
        <ReactiveQR onCode={console.log} />
      </CameraContainer>
    </>
  );
}

export default App;
