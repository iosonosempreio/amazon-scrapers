# Benchmarking of Amazon scrapers

A list of JS and Python scrapers compiled on Dec 2020.

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

### tducret/amazon-scraper-python [🎁](https://github.com/tducret/amazon-scraper-python)
Retrieves basic product info: title, tating, number of reviews, url, img, asin.
In addition you can also pass a search url (if you added complex filters for example), and save it to a file.

### adamlwgriffiths/amazon_scraper [🎁](https://github.com/adamlwgriffiths/amazon_scraper)
Needs Amazon API key
````
>>> from amazon_scraper import AmazonScraper
>>> amzn = AmazonScraper("put your access key", "secret key", "and associate tag here")
````
This package looks quite complete, it also allows to get reviews written by a specific user.

### scrapehero-code [🎁](https://github.com/scrapehero-code)
Different scrapers. Available commercial version.
One extracts product details and prices from Amazon.com.
Another scrapes reviews form URL.

### philipperemy/amazon-reviews-scraper [🎁](https://github.com/philipperemy/amazon-reviews-scraper)
Scrapes reviews. Integrates possibility to use VPN and automatic IP auto switching.

### digitalmethodsinitiative/dmi-amazon-recscraper [🎁](https://github.com/digitalmethodsinitiative/dmi-amazon-recscraper)
Scrapes recommendation networks of products form list of URLs.
