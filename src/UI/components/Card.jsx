import styled from "styled-components";
export function Card(props) {
  const { children, ...other } = props;
  return <Container {...other}>{children}</Container>;
}

const Container = styled.div`
  ${(props) => props}
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  margin: 10px;
  background-color: #121212;
  height: 340px;
`;
