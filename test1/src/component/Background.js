import React from "react";
import styled from "styled-components";

const BlueContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(rgb(187, 222, 251), rgba(255, 255, 255, 0) 45%);
  top: 300px;
  right: 0px;
  @media (min-width: 768px) {
    width: 800px;
    height: 800px;
    top: 5%;
    right: -45%;
  }
  @media (min-width: 1200px) {
    background: radial-gradient(rgb(144, 202, 249), rgba(255, 255, 255, 0) 45%);
    top: 0px;
    right: -400px;
    width: 1500px;
    height: 1500px;
  }
`;

const RedContainer = styled(BlueContainer)`
  background: radial-gradient(
    rgba(211, 167, 254, 0.5),
    rgba(255, 255, 255, 0) 45%
  );
  top: 200px;
  right: -200px;
  position: absolute;
  width: 500px;
  height: 500px;
  @media (min-width: 768px) {
    width: 800px;
    height: 800px;
    top: -24%;
    right: -20%;
  }
  @media (min-width: 1200px) {
    background: radial-gradient(
      rgba(211, 167, 254, 0.7),
      rgba(255, 255, 255, 0) 45%
    );
    top: -400px;
    right: -100px;
    width: 1500px;
    height: 1500px;
  }
`;

const TilContainer = styled(BlueContainer)`
  background: radial-gradient(
    rgba(101, 246, 255, 0.4),
    rgba(255, 255, 255, 0) 45%
  );
  top: 300px;
  right: -150px;
  position: absolute;
  width: 500px;
  height: 500px;
  @media (min-width: 768px) {
    top: -22%;
    right: -62%;
    width: 800px;
    height: 800px;
  }
  @media (min-width: 1200px) {
    width: 1500px;
    height: 1500px;
    background: radial-gradient(
      rgba(101, 246, 255, 0.7),
      rgba(255, 255, 255, 0) 45%
    );
    top: -400px;
    right: -600px;
  }
`;

function Background() {
  return (
    <>
      <BlueContainer />
      <RedContainer />
      <TilContainer />
    </>
  );
}

export default Background;
