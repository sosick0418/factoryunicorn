import React from "react";
import styled from "styled-components";
import { FlexBox } from "./common/FlexBox";

const Container = styled(FlexBox)`
  position: absolute;
  top: 25%;
  left: 10%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 768px) {
    left: 10px;
  }
`;

const Desc = styled.h1`
  color: rgb(62, 73, 92);
  font-weight: 800;
  font-size: 25px;
  line-height: 40px;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 50px;
  }
  @media (min-width: 1200px) {
    font-weight: 800;
    font-size: 45px;
    line-height: 70px;
  }
`;

const LinkButton = styled(FlexBox)`
  background: rgb(21, 101, 192);
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0px;
  &:hover {
    background-color: rgb(21, 90, 182);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 60px;
    font-size: 20px;
    margin: 20px 0px;
  }
  @media (min-width: 1200px) {
    width: 350px;
    height: 70px;
    font-size: 25px;
    margin: 30px 0px;
  }
`;

function Description() {
  return (
    <Container>
      <Desc>
        간단한 클릭! 쉬운 의류 제작!
        <br /> 3분만에 초보자가 <br /> 의류생산 전문가로
      </Desc>
      <LinkButton>실시간 제작 견적 확인</LinkButton>
    </Container>
  );
}

export default Description;
