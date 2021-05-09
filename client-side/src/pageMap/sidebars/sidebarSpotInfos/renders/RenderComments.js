import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr-short';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import RenderRating from "./RenderRating";
import Card from "../styled/Card";


const CommentSection = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Text = styled.div`
`;

const Separator = styled.p`
  font-style: italic;
`;

const StyledTime = styled.div`
  font-style: italic;
  font-size: 0.8rem;
`;

const formatter = buildFormatter(frenchStrings)

const RenderComments = ({ comments }) => (
  <CommentSection>
    <Separator>
    Avis & Commentaires ({comments.length})
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
  </CommentSection>
);

RenderComments.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default RenderComments;
