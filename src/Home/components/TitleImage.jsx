import styled from "styled-components";

import drishyam from "../../assets/images/drishyam.jpg";

export function TitleImage() {
  return <Image src={drishyam} />;
}

const Image = styled.img`
  width: 100%;
  height: 100px;
  @media (min-width: 768px) {
    margin: 10px 10%;
    height: initial;
    width: 80%;
  }
  @media (min-width: 900px) {
    margin: 10px 10%;
    height: initial;
    width: 80%;
  }
`;
