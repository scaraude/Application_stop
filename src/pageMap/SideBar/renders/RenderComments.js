import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr-short';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import RenderRating from "./RenderRating";
import Card from "../styled/Card";

const formatter = buildFormatter(frenchStrings)

// in your react component


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Text = styled.div`
  font-style: italic;
`;

const Separator = styled.p`
  font-style: italic;
`;

const StyledTime = styled.div`
  font-style: italic;
  font-size: 0.9rem;
`;

const RenderComments = ({ comments }) => (
  <div>
    <Separator>
    Avis & Commentaires 
    </Separator>
    {comments.map((comment) => (
    <Card key={comment._id}>
      <Header>
        <RenderRating rating={comment.score} />
        <StyledTime>
        <TimeAgo date={comment.createdAt} formatter={formatter} />
        </StyledTime>
      </Header>
      <UserName>{comment.userId}</UserName>
      <Text>{comment.text}</Text>
    </Card>
    ))}
  </div>
);

RenderComments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default RenderComments;
