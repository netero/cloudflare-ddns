const fs = require('fs');
const config = require('./configService');

exports.get = async () => {
    return new Promise(resolve => {
        fs.readFile('./data/history.json','utf8',(err, data) => {
            if(err){
                resolve(null);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

exports.addNew = async (ip) => {
    let history = await exports.get() ?? [];
    if(history.length > config.getMaxHistorySize()){
        history.pop();
    }
    history.unshift(ip);
    return new Promise((resolve, reject) => {
        fs.writeFile('./data/history.json', JSON.stringify(history), 'utf8', (err) => {
            if (err) {
                reject(err)
                return;
            }
            resolve()
        });
    })
}