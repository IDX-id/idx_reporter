'use strict';
const fs = require('fs');

var axios = require('axios');
const GetLastRade = function () {

    var config = {
        method: 'get',
        url: 'https://raw.githubusercontent.com/rahadiana/idx_reporter/main/report/trade_summary/MarketIndex.json',
        headers: {}
    };

    axios(config).then(function (response) {
        const abc = JSON.stringify(response.data)
        const mmm = JSON.parse(abc)[0]['DtCreate']
        const data = mmm
            .slice(0, 10)
            .replace(/-/g, '')
        fs.writeFileSync('./report/lastDate.txt', data);
        // console.log(mmm.slice(0, 10).replace(/-/g,''));
    })
}

module.exports = {
    GetLastRade
}