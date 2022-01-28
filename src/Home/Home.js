import styled from "styled-components";
import { Card, Carousel } from "../UI/components";

import { TitleImage } from "./components";
import { Details } from "../Details";

export function Home(props) {
  return (
    <>
      <TitleImage />
      <Container>
        {Array.isArray(props?.apiResponse) &&
          props?.apiResponse?.map((movie) => (
            <Card width="175px" height="340px" margin="10px">
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
          {Array.isArray(props?.apiResponse) &&
            props?.apiResponse?.map((movie) => (
              <div>
                <Card width="200px" height="340px" margin="10px">
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
      {!Array.isArray(props?.apiResponse) ? (
        props?.apiResponse?.Error ? (
          <h2 style={{ color: "white", textAlign: "center" }}>
            {props?.apiResponse?.Error}
          </h2>
        ) : (
          <Details {...props.apiResponse} />
        )
      ) : null}
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
