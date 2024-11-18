const config = require('../services/configService');

exports.get = async ()=>{
    const getPublicIpUrl = config.getPublicIpUrl();
    const response = await fetch(getPublicIpUrl);
    let infoIp = await response.text();
    const lines = infoIp.split("\n");
    const publicIp = lines.find(l=>l.startsWith(config.rowIpFilter())).split(config.rowIpFilter())[1].trim();
    return publicIp;
}

//TODO: Create a service to change public ip