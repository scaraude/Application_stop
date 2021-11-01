import React from "react";
import PropTypes from "prop-types";
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

const RenderInfo = ({ label, content }) => 
  <Info>
    <Label>{label}</Label>
    <Content>{content}</Content>
  </Info>
;

RenderInfo.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default RenderInfo;
