const mongoose = require('mongoose');

const mongoURL = process.env.DB_URI.replace('<user>', process.env.DB_USER)
                                   .replace('<password>', process.env.DB_PASSWORD)
                                   .replace('<dbname>', process.env.DB_NAME);

mongoose.connect(mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose;