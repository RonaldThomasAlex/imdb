import styled from "styled-components";

export function InfoRow(props) {
  return (
    <Row>
      <h3 style={{ color: "white", margin: 0, minWidth: 100 }}>
        {props.title}
      </h3>
      <p style={{ color: "white", margin: "0 0 0 10px" }}>{props.value}</p>
    </Row>
  );
}

const Row = styled.div`
  height: fit-content;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;
