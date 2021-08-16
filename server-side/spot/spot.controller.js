const Spot = require("./Spot.model");

exports.createSpot = async (req, res, next) => {
  const spot = req.body;
  console.log("spot", spot)
  const spotDocument = await Spot.create(spot);
  const savedSpot = await spotDocument.save();
  res.status(201).json({ message: "Nouveau spot enregistré :", spot: savedSpot })
};

exports.modifySpot = (req, res, next) => {
  Spot.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((info) =>
      res.status(200).json({
        message: "Modification enregistrée !",
        nbOfModifiedFields: info.n,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteSpot = (req, res, next) => {
  Spot.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Spot supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSpot = (req, res, next) => {
  Spot.findOne({ _id: req.params.id })
    .then((spot) => res.status(200).json(spot))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllSpots = (req, res, next) => {
  Spot.find()
    .then((spots) => res.status(200).json(spots))
    .catch((error) => res.status(400).json({ error }));
};

exports.popUp = (req, res) => {
  res.render("pages/map/popup");
};
exports.formSidebar = (req, res) => {
  res.render("pages/map/formside");
};
