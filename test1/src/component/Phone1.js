import React from "react";
import styled from "styled-components";
import plusIcon from "../assets/images/plus.png";
import clothesIcon from "../assets/images/clothes.png";
import { FlexBox } from "../component/common/FlexBox";
import Phone1Detail from "./Phone1Detail";
import PrevIcon from "../assets/images/prev.svg";
import NextIcon from "../assets/images/next.svg";

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

const DefaultStatBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 30px;
  padding: 35px 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 10px;
  background-color: rgb(235, 246, 255);
  border-bottom: 1px solid gray;
`;

const PlusIconBack = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  position: relative;
  box-shadow: rgb(0 0 0 / 30%) 1px 1px 5px 0px;
  border-radius: 7px;
  font-size: 30px;
  background: rgb(255, 255, 255);
`;

const ClothesIconBlueBack = styled(PlusIconBack)`
  background: rgb(30, 136, 229);
`;

const ClothesIconDeepBlueBack = styled(PlusIconBack)`
  background: rgb(12, 56, 123);
`;

const Icon = styled.img.attrs(props => {
  return { src: props.img };
})`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 40px;
  background: transparent;
`;

const Merchandise = styled(FlexBox)`
  padding: 30px 10px;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 100%;
`;

const TitleAndButtonBox = styled(FlexBox)`
  justify-content: space-between;
  width: 90%;
  border-bottom: 2px solid blue;
`;

const MerchanTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const DeleteButton = styled(FlexBox)`
  width: 95px;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 7px;
  background: rgb(12, 56, 123);
  color: rgb(255, 255, 255);
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

function Phone1() {
  return (
    <Container>
      <Header>Factory Unicorn</Header>
      <DefaultStatBox>
        <Title>제작품 기본 정보</Title>
        <Icons>
          <PlusIconBack>
            <Icon img={plusIcon} />
          </PlusIconBack>
          <ClothesIconDeepBlueBack>
            <Icon img={clothesIcon} />
          </ClothesIconDeepBlueBack>
          <ClothesIconBlueBack>
            <Icon img={clothesIcon} />
          </ClothesIconBlueBack>
        </Icons>
      </DefaultStatBox>
      <Merchandise>
        <TitleAndButtonBox>
          <MerchanTitle>제작품 1</MerchanTitle>
          <DeleteButton>제작품제거</DeleteButton>
        </TitleAndButtonBox>
        <Phone1Detail title={"제작품 카테고리"} option={"남성복"} />
        <Phone1Detail title={"제작품 유형"} option={"상의"} />
        <Phone1Detail title={"반팔 티셔츠"} option={"반팔 티셔츠"} />
      </Merchandise>
      <BottomBar>
        <PlusIconBack>
          <Icon
            img={PrevIcon}
            style={{ height: "1em", width: "1em", top: "10%", left: "10%" }}
          />
        </PlusIconBack>
        <PlusIconBack>
          <Icon
            img={NextIcon}
            style={{ height: "1em", width: "1em", top: "10%", left: "10%" }}
          />
        </PlusIconBack>
      </BottomBar>
    </Container>
  );
}

export default Phone1;
