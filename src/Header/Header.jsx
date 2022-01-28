import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { TextBox } from "../UI/components";

export function Header(props) {
  return (
    <Container>
      <Logo src={logo} />
      <Spacer>
        <ResponsiveTextBox
          placeholder="Search movie"
          onChange={(event) => props.setTitle(event.target.value)}
          searchHandler={props.searchHandler}
        />
      </Spacer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #121212;
  display: flex;
  padding: 14px 5%;
  flex-direction: column;
  @media (min-width: 575px) {
    padding: 14px 10%;
    flex-direction: row;
  }
`;

const Logo = styled.img`
  width: 64px;
  height: 36px;
  border-radius: 5px;
`;

const Spacer = styled.div`
  margin-top: 15px;
  @media (min-width: 575px) {
    margin-top: 0;
    margin-left: 15%;
  }
`;

const ResponsiveTextBox = styled(TextBox)`
  width: 100%;
  @media (min-width: 800px) {
    width: 500px;
  }
`;
