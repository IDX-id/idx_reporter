'use strict';
const fs = require('fs');

const DataTransform = function (data, url) {

    const lastDate = fs.readFileSync('./report/lastDate.txt', {
        encoding: 'utf8',
        flag: 'r'
    });
    const OriginUrl = 'https://www.idx.co.id/umbraco/Surface',
        Marketime = OriginUrl + '/Helper/GetMarketTime?culture=id-id',
        MarketSummary = OriginUrl + '/Home/GetTradeSummary',
        MarketIndex = OriginUrl + '/StockData/GetConstituent',
        MarketIndexSektoral = OriginUrl + '/StockData/GetIndexIC',
        Rekapitulasi = OriginUrl +
                '/TradingSummary/GetRecapSummary?Length=10000&date=' + lastDate,
        GetStockSummary = OriginUrl + '/TradingSummary/GetStockSummary?Length=10000&dat' +
                'e=' + lastDate,
        GetAllStocks = OriginUrl + "/Helper/GetEmiten?emitenType=s"

    let BuildFolder = url,
        UrlBuilder,
        FilePath,
        d = JSON.parse(data);

    function writeFileSync(file, data) {
        fs.writeFileSync(file, data);
    }

    switch (BuildFolder) {
        case Marketime:
            UrlBuilder = data
            FilePath = './report/trade_summary/Marketime.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case MarketSummary:
            UrlBuilder = d
            FilePath = './report/trade_summary/MarketSummary.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case MarketIndex:
            UrlBuilder = JSON.stringify(d['Items'])
            FilePath = './report/trade_summary/MarketIndex.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case MarketIndexSektoral:
            UrlBuilder = JSON.stringify(d['data'])
            FilePath = './report/trade_summary/MarketIndexSektoral.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case Rekapitulasi:
            UrlBuilder = JSON.stringify(d['data'])
            FilePath = './report/trade_summary/Rekapitulasi.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case GetStockSummary:
            UrlBuilder = JSON.stringify(d)
            FilePath = './report/trade_summary/GetStockSummary.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        case GetAllStocks:
            UrlBuilder = JSON.stringify(d)
            FilePath = './report/data/GetAllStocks.json'
            writeFileSync(FilePath, UrlBuilder);
            break;
        default:
            UrlBuilder = 'not definied'
    }

    return UrlBuilder
}

module.exports = {
    DataTransform
}