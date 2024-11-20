const config = require('../config/config.json');

let configs = {
    validateConfigs:()=>{
        let zoneId = process.env.CLOUDFLARE_ZONE_ID;
        if(!zoneId) throw new Error("Environment variable CLOUDFLARE_ZONE_ID missing");
        let recordId = process.env.CLOUDFLARE_RECORD_ID;
        if(!recordId) throw new Error("Environment variable CLOUDFLARE_RECORD_ID missing");
        let token = process.env.CLOUDFLARE_TOKEN;
        if(!token) throw new Error("Environment variable CLOUDFLARE_TOKEN missing");
        let name = process.env.CLOUDFLARE_RECORD_NAME;
        if(!name) throw new Error("Environment variable CLOUDFLARE_RECORD_NAME missing");
        let type = process.env.CLOUDFLARE_RECORD_TYPE;
        if(!type) throw new Error("Environment variable CLOUDFLARE_RECORD_TYPE missing");
        return {zoneId,recordId};
    },
    maxHistorySize:() => parseInt(process.env.MAX_HISTORY_SIZE ?? config.maxHistorySize),
    getPublicIpUrl:()=>process.env.GET_PUBLIC_IP_URL ?? config.getPublicIpUrl,
    setPublicIpUrl:()=>{
        let cloudflareConfigs = configs.validateConfigs();
        let baseUrl = process.env.SET_PUBLIC_IP_URL ?? config.setPublicIpUrl;
        return baseUrl
            .replace("{zoneId}",cloudflareConfigs.zoneId)
            .replace("{recordId}",cloudflareConfigs.recordId);
    },
    rowIpFilter:()=>config.rowIpFilter,
    token:()=>process.env.CLOUDFLARE_TOKEN,
    recordName:()=>process.env.CLOUDFLARE_RECORD_NAME,
    recordType:()=>process.env.CLOUDFLARE_RECORD_TYPE
}

module.exports = configs;