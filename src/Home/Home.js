import styled from "styled-components";
import { Card } from "../UI/components";

export function Home(props) {
  return (
    <Card width="175px">
      <img src={props?.apiResponse?.Poster} style={{ width: "inherit" }} />
      <Text>{props?.apiResponse?.imdbRating}</Text>
      <Text>{props?.apiResponse?.Title}</Text>
    </Card>
  );
}

const Text = styled.h5`
  color: white;
  margin: 0;
  padding: 10px;
`;
