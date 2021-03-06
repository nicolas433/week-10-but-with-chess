const Player = require('../models/Player');

module.exports = {
    async index(req, res){
        const { latitude, longitude } = req.query;

        const players = await Player.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            }
        });

        return res.json({ players })
    }
}