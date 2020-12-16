const ProductsScraper = require("@scrapingant/amazon-proxy-scraper")

const scraper = new ProductsScraper({
    "apiKey": "API-KEY",
    "keyword": "baking mat"
});

scraper.startScraping().then(console.log, console.error);