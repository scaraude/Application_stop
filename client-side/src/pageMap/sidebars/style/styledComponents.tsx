import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../../components/NavBar/NavBar";

export const Panel = styled.div`
  position: relative;
  width: 33vw;
  min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  `;

export const Body = styled.div`
  background-color: #ececec;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

export const Centered = styled.div`
    position: absolute;
    left: -50vw;
    top: 50vh;
    z-index: 500;
    transform: translateX(-50%) translateY(-50%);
`;