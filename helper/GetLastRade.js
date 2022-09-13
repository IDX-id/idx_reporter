'use strict';
const fs = require('fs');

var axios = require('axios');
const {GetContent} = require('./pupet');

const GetLastRade = function () {
    GetContent("marketindex")

    fs.readFile(
        './report/trade_summary/MarketIndex.json',
        'utf8',
        function (err, data) {
            const abc = data
            const mmm = JSON.parse(abc)[0]['DtCreate']
            const res = mmm.slice(0, 10).replace(/-/g, '')

            fs.writeFileSync('./report/lastDate.txt', res);
            // Display the file content
        }
    );

    // var config = {
    //     method: 'get',
    //     url: 'https://raw.githubusercontent.com/rahadiana/idx_reporter/main/report/trade_sum' +
    //             'mary/MarketIndex.json',
    //     headers: {}
    // };

    // axios(config).then(function (response) {
    //     const abc = JSON.stringify(response.data)
    //     const mmm = JSON.parse(abc)[0]['DtCreate']
    //     const data = mmm
    //         .slice(0, 10)
    //         .replace(/-/g, '')
    //     fs.writeFileSync('./report/lastDate.txt', data);
    //     console.log(mmm.slice(0, 10).replace(/-/g, ''));
    // })
}

module.exports = {
    GetLastRade
}