
const ipService =  require('../services/ipService');
const publicIpService = require('../services/publicIpService');
const historyService = require('../services/historyService');

exports.get = async (req, res) => {
    let ip = await ipService.get();
    if(!ip){
        res.status(404).json({ error: 'Failed to fetch ip' });
        return;
    }
    res.status(200).json(ip);
}

exports.update = async (req, res) => {
    let currentIp = await ipService.get();
    let publicIp = await publicIpService.get();
    if(currentIp?.ip == publicIp){
        return res.status(200).json({changed : false, currentIp:currentIp?.ip});
    }

    const newIp = {
        ip:publicIp,
        startTime:new Date()
    };
    await ipService.set(newIp);
    await historyService.addNew(newIp);
    let result = await publicIpService.set(newIp);
    res.status(200).json({changed:result.success, currentIp:result.success ? publicIp : currentIp?.ip})

}