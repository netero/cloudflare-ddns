const historyService = require('../services/historyService');

exports.get = async (req, res) => {
    let history = await historyService.get();
    if(!history){
        res.status(404).json({ error: 'Failed to fetch history' });
        return;
    }
    res.status(200).json(history);
}