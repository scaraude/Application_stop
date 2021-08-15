import styled from "styled-components";

export const Panel = styled.div`
  position: relative;
  width: 33vw;
  min-height: 100vh;
  background-color: #ececec;
`;

export const Header = styled.div`
  background-color: #ececec;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  `;
  // box-shadow: 0px 2px 2px #3d3d3d61; ombre pour les tabs

export const StyledIconButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  background-color: #ececec;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;
