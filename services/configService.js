const config = require('../config/config.json');

let configs = {
    validateConfigs:()=>{
        let zoneId = process.env.CLOUDFLARE_ZONE_ID;
        if(!zoneId) throw new Error("Environment variable CLOUDFLARE_ZONE_ID missing");
        let recordId = process.env.CLOUDFLARE_RECORD_ID;
        if(!recordId) throw new Error("Environment variable CLOUDFLARE_RECORD_ID missing");
        return {zoneId,recordId};
    },
    getMaxHistorySize:() => parseInt(process.env.MAX_HISTORY_SIZE ?? config.maxHistorySize),
    getPublicIpUrl:()=>process.env.GET_PUBLIC_IP_URL ?? config.getPublicIpUrl,
    setPublicIpUrl:()=>{
        let cloudflareConfigs = configs.validateConfigs();
        let baseUrl = process.env.SET_PUBLIC_IP_URL ?? config.setPublicIpUrl;
        return baseUrl
            .replace("{zoneId}",cloudflareConfigs.zoneId)
            .replace("{recordId}",cloudflareConfigs.recordId);
    },
    rowIpFilter:()=>config.rowIpFilter
}

module.exports = configs;