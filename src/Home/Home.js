import styled from "styled-components";
import { Card, Carousel } from "../UI/components";

import { TitleImage } from "./components";

export function Home(props) {
  return (
    <>
      <TitleImage />
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
      <CarouselWrapper>
        <Carousel>
          {props?.apiResponse?.map((movie) => (
            <div>
              <Card width="200px">
                <img
                  src={movie.Poster}
                  style={{ width: "inherit", height: "260px" }}
                />
                <Text>{movie.Year}</Text>
                <Text>{movie.Title}</Text>
              </Card>
            </div>
          ))}
        </Carousel>
      </CarouselWrapper>
    </>
  );
}

const Text = styled.h5`
  color: white;
  margin: 0;
  padding: 5px;
`;

const Container = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 10%;
  }
`;

const CarouselWrapper = styled.div`
  margin: 10px 0;

  @media (min-width: 800px) {
    display: none;
  }
`;
