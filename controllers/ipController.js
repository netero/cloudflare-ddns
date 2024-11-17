
const ipService =  require('../services/ipServices');

exports.get = async (req, res) => {
    let ip = await ipService.get();
    if(!ip){
        res.status(404).json({ error: 'Failed to fetch ip' });
        return;
    }
    res.status(200).json(ip);
}

exports.update = async (req, res) => {
    //Get saved ip
    let newIp = "10.10.10.1";
    await ipService.set(newIp);
    res.status(200).json({OK:"1"})
    //Get current public ip from cloudflare
    //Compare them
        //if changed 
        // TODO: call history.post

}