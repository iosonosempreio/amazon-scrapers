# Benchmarking of Amazon scrapers

List of JS scrapers. Compiled between Dec 16 2020 and XXX XX XXXX.

Aim is to get:
- amazon book recommendation networks
- querying bestselling books per category
- reader comments
- other items reviewed by a given reviewer

## Node.js

### Amazon Buddy [🎁](https://github.com/drawrowfly/amazon-product-api)
Products data (with reviews), no related products. Max 500 products and 1000 reviews.


### Amazon proxy scraper [🎁](https://github.com/ScrapingAnt/amazon_scraper)
Scrapes products information from Amazon via ScrapingAnt API. Gets: amazon ID, rating, number of reviews, price, title, short and full description, high-resolution image, url, sponsored or not, discounted or not, featured by Amazon choice or not.

You will not be banned by Amazon because of using proxies out of the box, but [you need a RapidApi key](https://github.com/ScrapingAnt/amazon_scraper#before-you-begin)

## Python

### Amazon_scraper [🎁](https://github.com/adamlwgriffiths/amazon_scraper)

Needs Amazon API key
````
>>> from amazon_scraper import AmazonScraper
>>> amzn = AmazonScraper("put your access key", "secret key", "and associate tag here")
````
This package looks quite complete, it also allows to get reviews written by a specific user.