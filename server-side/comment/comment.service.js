import Comment from "./Comment.model";

const isSpotOwner = async (req, res, next) => {
  const { id: spotId } = req.body;
  const userId = req.userId;

  try {
    const comment = await Comment.find({ id: spotId });
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

const spotService = {
  isSpotOwner,
};

module.exports = spotService;
