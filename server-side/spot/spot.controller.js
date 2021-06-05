const Spot = require("./Spot.model");

exports.createSpot = (req, res, next) => {
  console.log(req.body);
  const spot = req.body;
  // const spot = new Spot({
  //   userId: req.user.userId,
  //   title: req.body.title,
  //   rating: req.body.rating,
  //   gps: { lat: req.body.lat, lon: req.body.lon },
  //   destinations: req.body.destinations,
  //   direction: req.body.direction,
  //   roads: [req.body.roads],
  //   access: req.body.access,
  //   advice: req.body.advice,
  // });
  // spot
  //   .save()
  //   .then((spot) =>
  //     res.status(201).json({ message: "Nouveau spot enregistré :", spot: spot })
  //   )
  //   .catch((error) => res.status(400).json({ error }));
  res.status(201).json({ message: "Nouveau spot enregistré :", spot: spot })
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
