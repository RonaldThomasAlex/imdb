import styled from "styled-components";
import { Card } from "../UI/components";

export function Home(props) {
  return (
    <Container>
      {props?.apiResponse?.map((movie) => (
        <Card width="175px">
          <img
            src={movie.Poster}
            style={{ width: "inherit", height: "260px" }}
          />
          <Text>{movie.Year}</Text>
          <Text>{movie.Title}</Text>
        </Card>
      ))}
    </Container>
  );
}

const Text = styled.h5`
  color: white;
  margin: 0;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 10px 10%;
`;
