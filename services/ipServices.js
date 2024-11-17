const fs = require('fs');

// Create service Read Ip from ip.js
exports.get = async () => {
    return new Promise(resolve => {
        fs.readFile('./data/ip.json','utf8',(err, data) => {
            if(err){
                resolve(null);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}
// Create service to change Ip
exports.set = async (ip) => {
    const newIp = {
        ip,
        startTime:new Date()
    };
    return new Promise((resolve, reject) => {
        fs.writeFile('./data/ip.json', JSON.stringify(newIp), 'utf8', (err) => {
            if (err) {
                reject(err)
                return;
            }
            resolve()
        });
    })
}