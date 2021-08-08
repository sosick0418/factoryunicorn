import React from "react";
import styled from "styled-components";
import { FlexBox } from "./common/FlexBox";

const Container = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  height: 30%;
  margin-top: 5%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Option = styled.div`
  padding: 5px 5px;
  border-bottom: 1px solid gray;
  width: 100%;
`;

function Phone1Detail({ title, option }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Option>{option}</Option>
    </Container>
  );
}

export default Phone1Detail;
