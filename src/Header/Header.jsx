import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { TextBox } from "../UI/components";

export function Header() {
  return (
    <Container>
      <Logo src={logo} />
      <TextBox width="500px" placeholder="Search movie" />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  padding: 14px 10%;
`;

const Logo = styled.img`
  width: 64px;
  height: 36px;
  border-radius: 5px;
`;
