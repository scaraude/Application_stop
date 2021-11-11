import React from "react";
import styled from "styled-components";
import TimeAgo from "react-timeago";
import { RenderRating } from "./RenderRating";
import { Card } from "../styled/Card";
import { Comment } from '../get-comments.hook'

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


interface RenderCommentsProps {
  comments: Comment[];
}

export const RenderComments = ({ comments }: RenderCommentsProps) =>
  <CommentSection>
    <Separator>
      Avis & Commentaires ({comments.length})
    </Separator>
    {comments.map((comment) =>
      <Card key={comment.id}>
        <Header>
          <RenderRating rating={comment.score} />
          <StyledTime>
            <TimeAgo date={comment.createdAt} />
          </StyledTime>
        </Header>
        <UserName>{comment.userId}</UserName>
        <Text>{comment.text}</Text>
      </Card>
    )}
  </CommentSection>
  ;
