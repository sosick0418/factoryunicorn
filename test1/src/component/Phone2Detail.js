import React from "react";
import styled from "styled-components";
import { FlexBox } from "./common/FlexBox";

const Container = styled(FlexBox)`
  padding: 0 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 10%;
  margin-bottom: 10%;
  margin-top: 10%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5%;
`;

const ButtonContainer = styled(FlexBox)``;

const Button = styled.div`
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
  border: 1px solid rgb(21, 101, 192);
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
`;

const BlueButton = styled(Button)`
  background: rgb(21, 101, 192);
  color: rgb(255, 255, 255);
`;

function Phone2Detail({ title, blueButton, button }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ButtonContainer>
        <BlueButton>{blueButton}</BlueButton>
        <Button>{button}</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Phone2Detail;
