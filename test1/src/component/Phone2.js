import React from "react";
import styled from "styled-components";
import { FlexBox } from "../component/common/FlexBox";
import PrevIcon from "../assets/images/prev.svg";
import NextIcon from "../assets/images/next.svg";
import Phone2Detail from "./Phone2Detail";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 15px;
  font-size: 25px;
  border-bottom: 1px solid gray;
`;

const BottomBar = styled(FlexBox)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 60px;
  background: rgb(21, 101, 192);
  border-radius: 0px 0px 15px 15px;
  justify-content: space-between;
  padding: 0px 5px 0px 15px;
`;

const IconBack = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  position: relative;
  box-shadow: rgb(0 0 0 / 30%) 1px 1px 5px 0px;
  border-radius: 7px;
  font-size: 30px;
  background: rgb(255, 255, 255);
`;

const Icon = styled.img.attrs(props => {
  return { src: props.img };
})`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 40px;
  background: transparent;
  height: 1em;
  width: 1em;
  top: 10%;
  left: 10%;
`;

const TextBox = styled(FlexBox)`
  margin-top: 30px;
`;

const Text = styled.p`
  color: rgb(74, 85, 102);
`;

function Phone2() {
  return (
    <Container>
      <Header>Factory Unicorn</Header>
      <Phone2Detail title={"넥"} blueButton={"라운드넥"} button={"브이넥"} />
      <Phone2Detail title={"트임"} blueButton={"있음"} button={"없음"} />
      <hr style={{ marginTop: "20%", width: "90%" }}></hr>
      <Phone2Detail
        title={"제작품 치수"}
        blueButton={"가이드"}
        button={"직접 입력"}
      />
      <TextBox>
        <Text>
          선택하신 <strong>핏</strong>과 <strong>사이즈</strong>를 기준으로
          <br />
          팩토리 유니콘에서 지정한 <br />
          가장 <strong>보편적인 치수</strong>를<br />
          추천해드립니다.
        </Text>
      </TextBox>
      <BottomBar>
        <IconBack>
          <Icon img={PrevIcon} />
        </IconBack>
        <IconBack>
          <Icon img={NextIcon} />
        </IconBack>
      </BottomBar>
    </Container>
  );
}

export default Phone2;
