const Comment = require('../models/Comment');

exports.createComment = (req, res, next) => {
    delete req.body._id;
    const comment = new Comment({
        ...req.body,
        spotId: req.params.spotId
    });
    comment.save()
        .then(comment => res.status(201).json({message : "Commentaire enregistré :" , comment : comment}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyComment = (req, res, next) => {
    Comment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(info => res.status(200).json({ message: 'Modif enregistrée !', nbOfModifiedFields : info.n }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
    Comment.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneComment = (req, res, next) => {
    Comment.findOne({ _id: req.params.id })
        .then(comment => res.status(200).json(comment))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllCommentsOneSpot = (req, res, next) => {
    console.log(req.params);
    console.log(req.params.spotId);
    Comment.find({spotId: req.params.spotId})
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllComments = (req, res, next) => {
    Comment.find()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};