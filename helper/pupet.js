const GetContent = function (Urls) {
    return new Promise(async (resolve, reject) => {
        try {

            const puppeteer = require('puppeteer');
            const {UrlBuilder} = require('./UrlBuilder');
            const {FindTag} = require('./FindTag');
            const {DataTransform} = require('./DataTransform');
            const TrueUrl = UrlBuilder(Urls);
            //insert code here
            const browser = await puppeteer.launch({headless: 1})
            const page = await browser.newPage()
            await page.setUserAgent(
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Geck' +
                'o) Chrome/98.0.4758.102 Safari/537.36'
            )
            // await page.setViewport({width: 1536, height: 235});

            await page.goto(TrueUrl)
            const asd = await page.content()

            const beverage = asd.includes('</pre>')
                ? FindTag(asd, 'pre-wrap;">', '</pre>')
                : FindTag(asd, '<body>', '</body>', 0);
            await browser.close();
            return resolve(DataTransform(beverage, TrueUrl));
            //   return resolve(beverage);
        } catch (e) {
            return reject(e);
        }
    })
}

module.exports = {
    GetContent
}