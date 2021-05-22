import Spot from "./Spot.model";

const isSpotOwner = async (req, res, next) => {
  const { id: spotId } = req.body;
  const userId = req.userId;

  try {
    const spot = await Spot.find({ id: spotId });
    if (spot.authorId === userId) {
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
