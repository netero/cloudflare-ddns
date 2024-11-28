const publicIpService = require('../services/publicIpService');

exports.get = async (req, res) => {
    res.status(200).send(await publicIpService.get());
}