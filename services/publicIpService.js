const config = require('../services/configService');

exports.get = async ()=>{
    const getPublicIpUrl = config.getPublicIpUrl();
    const response = await fetch(getPublicIpUrl);
    let infoIp = await response.text();
    const lines = infoIp.split("\n");
    const publicIp = lines.find(l=>l.startsWith(config.rowIpFilter())).split(config.rowIpFilter())[1].trim();
    return publicIp;
}

exports.set = async (ip) => {
    let updateDnsRecord = await fetch(config.setPublicIpUrl(),
        {
            method: 'PUT',
            headers:{
                'Authorization':'Bearer ' + config.token(),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "type": config.recordType(),
                "name":config.recordName(),
                "content": ip.ip
            })   
        }
    )
    let jsonBody = await updateDnsRecord.json();
    return jsonBody;
}