const fs = require('fs');

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

exports.set = async (ip) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./data/ip.json', JSON.stringify(ip), 'utf8', (err) => {
            if (err) {
                reject(err)
                return;
            }
            resolve()
        });
    })
}