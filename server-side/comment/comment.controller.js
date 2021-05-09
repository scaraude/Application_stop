const Comment = require("./Comment.model");
const User = require("../user/user.model");
const Spot = require("../spot/Spot.model");

exports.createComment = async (req, res, next) => {
  const { rating, text } = req.body;

  try {
    const user = await User.findById(req.userId);
    const spot = await Spot.findById(req.params.spotId);

    const comment = new Comment({
      rating,
      text,
      spot: spot._id,
      user: user._id,
    });

    await comment.save();
    res
      .status(201)
      .json({ message: "Commentaire enregistré :", comment: comment });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.modifyComment = (req, res, next) => {
  Comment.updateOne({ _id: req.params.id }, { ...req.body })
    .then((info) =>
      res.status(200).json({
        message: "Modification enregistrée !",
        nbOfModifiedFields: info.n,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
  Comment.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneComment = (req, res, next) => {
  Comment.findOne({ _id: req.params.id })
    .then((comment) => res.status(200).json(comment))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllCommentsOneSpot = (req, res, next) => {
  Comment.find({ spot: req.params.spotId })
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllComments = (req, res, next) => {
  Comment.find()
    .then((comments) => res.status(200).json(comments))
    .catch((error) => res.status(400).json({ error }));
};
