const amazonScraper = require('amazon-buddy');

(async () => {
    try {
        // Collect 50 products from a keyword 'xbox one'
        // Default country is US
        // const products = await amazonScraper.products({ keyword:'*', category: 'stripbooks-intl-ship', number: 50, country: 'GB' });

        // console.log(products)

        const categories = await amazonScraper.categories({ category: 'stripbooks-intl-ship', country: 'IT' });

        console.log(categories)

    } catch (error) {
        console.log(error);
    }
})();