import styled from "styled-components";

export const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  padding: 0.5rem;
  color: #666666;
  align-self: flex-end;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2.5rem;
`;

export const InputControl = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;
