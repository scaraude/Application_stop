import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import RenderRating from "./RenderRating";
import Card from "../styled/Card";

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
  /* margin-bottom: 1rem; */
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
        <span>{comment.createdAt}</span>
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
