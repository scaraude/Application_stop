import Comment from "./Comment.model";

const isCommentOwner = async (req, res, next) => {
  const { id: commentId } = req.body;
  const userId = req.userId;

  try {
    const comment = await Comment.find({ id: commentId });
    if (comment.authorId === userId) {
      next();
    }
    return res
      .status(401)
      .send({ message: "Unauthorized: You need to be the author" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const commentService = {
  isCommentOwner,
};

module.exports = commentService;
