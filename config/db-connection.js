const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://HHAdmin:lJTtycStJfw8OANQ@cluster0.t6jtg.mongodb.net/HitchHikeDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;