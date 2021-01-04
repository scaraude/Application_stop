const Spot = require('../models/Spot');

exports.createSpot = (req, res, next) => {
    const spot = new Spot({
        ...req.body,
        userId : req.user.userId,
    });
    spot.save()
        .then(spot => res.status(201).json({message : "objet enregistré :" , spot : spot}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifySpot = (req, res, next) => {
    Spot.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(info => res.status(200).json({ message: 'Modif enregistrée !', nbOfModifiedFields : info.n }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteSpot = (req, res, next) => {
    Spot.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneSpot = (req, res, next) => {
    Spot.findOne({ _id: req.params.id })
        .then(spot => res.status(200).json(spot))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllSpots = (req, res, next) => {
    Spot.find()
        .then(spots => res.status(200).json(spots))
        .catch(error => res.status(400).json({ error }));
};