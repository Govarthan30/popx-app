import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, rgb(116, 84, 204), #eaeaea);
  padding-top: 30px;
`;

export const InnerContainer = styled.div`
  width: 375px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;