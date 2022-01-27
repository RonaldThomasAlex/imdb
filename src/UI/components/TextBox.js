import styled from "styled-components";
import searchIcon from "../../assets/svg/search.svg";

export function TextBox(props) {
  const { onClick, ...other } = props;
  return (
    <Container>
      <Input type="text" {...other} />
      <SearchIcon onClick={onClick}>
        <img src={searchIcon} />
      </SearchIcon>
    </Container>
  );
}

const SearchIcon = styled.button`
  border: 0;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  ${(props) => props}
  padding: 10px;
  border: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  :focus {
    outline: none;
  }
`;
const Container = styled.div`
  display: flex;
  margin-left: 20%;
`;
