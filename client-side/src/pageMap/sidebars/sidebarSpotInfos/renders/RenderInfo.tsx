import React from "react";
import styled from "styled-components";

const Info = styled.div`
  margin: 1rem 0;
`;

const Label = styled.div`
  font-size: 0.8rem;
  color: #424242;
`;

const Content = styled.div`
  padding-left: 0.5rem;
  color: #262626;
`;

interface RenderInfoProps {
  label: string;
  content: string;
}

const RenderInfo = ({ label, content }: RenderInfoProps) => (
  <Info>
    <Label>{label}</Label>
    <Content>{content}</Content>
  </Info>)



export default RenderInfo;
