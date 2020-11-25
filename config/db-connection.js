const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://LudoSD:26051996@cluster0.xmutg.mongodb.net/HitchHikeDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;