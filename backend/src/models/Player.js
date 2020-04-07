const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PlayerSchema = new mongoose.Schema({
    name: String,
    chess_username: String,
    bio: String,
    avatar: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Player', PlayerSchema);