import React from "react";
import styled from "styled-components";
import Background from "../component/Background";
import NavBar from "../component/common/NavBar";
import Description from "../component/Description";
import SwiperComponent from "../component/SwiperComponent";

const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  @media (min-width: 1200px) {
    max-width: 1520px;
    margin: 0px auto;
  }
`;

const ContentBody = styled.div``;

const ContentContainer = styled.div`
  height: 100vh;
  max-height: 1080px;
  width: 100%;
  padding: 0 3%;
  @media (min-width: 1200px) {
    max-width: 1520px;
    margin: 0px auto;
  }
  @media (min-width: 768px) {
    padding: 0px 100px;
  }
`;

const RelativeBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1080px;
`;

function MainPage() {
  return (
    <Body>
      <NavBar />
      <ContentBody>
        <ContentContainer>
          <RelativeBox>
            <Background />
            <Description />
            <SwiperComponent />
          </RelativeBox>
        </ContentContainer>
      </ContentBody>
    </Body>
  );
}

export default MainPage;
