var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spaceFighterDB', {useNewUrlParser: true});
module.exports = mongoose;