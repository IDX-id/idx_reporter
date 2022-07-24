'use strict';
const fs = require('fs');

const UrlBuilder = function (data) {

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
                'e=' + lastDate

    let BuildFolder = data.toLowerCase(),
        UrlBuilder;

    switch (BuildFolder) {
        case "marketime":
            UrlBuilder = Marketime
            break;
        case "sum":
            UrlBuilder = MarketSummary
            break;
        case "marketindex":
            UrlBuilder = MarketIndex
            break;
        case "marketindexsektoral":
            UrlBuilder = MarketIndexSektoral
            break;
        case "rekapitulasi":
            UrlBuilder = Rekapitulasi
            break;
            case "getstocksummary":
                UrlBuilder = GetStockSummary
                break;
        default:
            UrlBuilder = Marketime
    }
    return UrlBuilder
}

module.exports = {
    UrlBuilder
}