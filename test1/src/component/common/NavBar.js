import React from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import FullLogoImage from "../../assets/images/logo2.svg";
import LogoImage from "../../assets/images/logo1.svg";

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px 0px;
  z-index: 1;
  @media (min-width: 768px) {
    height: 65px;
  }
  @media (min-width: 1200px) {
    height: 80px;
  }
`;

const PaddingBox = styled.div`
  width: 100%;
  padding: 0 3%;
  @media (min-width: 768px) {
    padding: 0 100px;
  }
  @media (min-width: 1200px) {
    max-width: 1520px;
    margin: 0px auto;
  }
`;

const ContentBox = styled(FlexBox)`
  justify-content: space-between;
  width: 100%;
  height: 50px;
  @media (min-width: 768px) {
    height: 65px;
  }
  @media (min-width: 1200px) {
    height: 80px;
  }
`;

const TextBox = styled(FlexBox)`
  justify-content: flex-end;
`;

const LoginText = styled.div`
  font-weight: 500;
  width: 50px;
  color: rgb(74, 85, 102);
  &:hover {
    cursor: pointer;
    color: rgb(21, 101, 192);
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ContactBox = styled(FlexBox)`
  color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 5px 1px;
  background: rgb(21, 101, 192);
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 15%;
  &:hover {
    background-color: rgb(21, 90, 182);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
  @media (min-width: 1200px) {
    width: 150px;
    height: 50px;
    font-size: 18px;
  }
`;

const FullLogo = styled.img.attrs({
  src: FullLogoImage,
})`
  width: 120px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1200px) {
    width: 150px;
  }
`;

const Logo = styled.img.attrs({
  src: LogoImage,
})`
  width: 35px;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <PaddingBox>
        <ContentBox>
          <FullLogo />
          <Logo />
          <TextBox>
            <LoginText>로그인</LoginText>
            <ContactBox>문의하기</ContactBox>
          </TextBox>
        </ContentBox>
      </PaddingBox>
    </NavContainer>
  );
}

export default NavBar;
