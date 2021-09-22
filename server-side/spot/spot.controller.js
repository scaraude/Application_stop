const Spot = require("./Spot.model");

exports.createSpot = async (req, res) => {
  const spot = req.body;
  const spotDocument = await Spot.create(spot);
  const savedSpot = await spotDocument.save();
  res.status(201).json({ message: "Nouveau spot enregistré :", spot: savedSpot });
};

exports.modifySpot = (req, res) => {
  Spot.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((info) =>
      res.status(200).json({
        message: "Modification enregistrée !",
        nbOfModifiedFields: info.n,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteSpot = (req, res) => {
  Spot.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Spot supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSpot = (req, res) => {
  Spot.findOne({ _id: req.params.id })
    .then((spot) => res.status(200).json(spot))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllSpots = (req, res) => {
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
