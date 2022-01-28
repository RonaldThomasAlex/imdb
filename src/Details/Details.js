import styled from "styled-components";

import { Bar, InfoRow } from "./components";
import { Card } from "../UI/components";

export function Details(props) {
  return (
    <Container>
      <Bar {...props} />
      <Info>
        <Card width="200px" margin="0px">
          <img
            src={props.Poster}
            style={{ width: "inherit", height: "260px" }}
          />
        </Card>
        <InfoContainer>
          <InfoRow title="Director" value={props.Director} />
          <InfoRow title="Actors" value={props.Actors} />
          <InfoRow title="Writer" value={props.Writer} />
          <InfoRow title="Box office" value={props.BoxOffice} />
          <InfoRow title="Plot" value={props.Plot} />
        </InfoContainer>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  @media (min-width: 768px) {
    margin: 10px 10%;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
