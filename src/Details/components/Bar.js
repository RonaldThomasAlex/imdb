import styled from "styled-components";

export function Bar(props) {
  return (
    <BarConatiner>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Title>{props.Title}</Title>
        <ReleaseDate>{props.Released}</ReleaseDate>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h5 style={{ color: "white", margin: 0 }}>Rating</h5>
        <div style={{ color: "white", fontStyle: "italic" }}>
          {props.imdbRating}/10
        </div>
      </div>
    </BarConatiner>
  );
}

const Title = styled.h2`
  color: white;
  margin: 0;
`;

const ReleaseDate = styled.p`
  color: grey;
  font-style: italic;
  margin: 0;
`;

const BarConatiner = styled.div`
  display: Flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #121212;
`;
