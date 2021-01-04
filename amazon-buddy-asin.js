const fs = require('fs');
const { Parser } = require("json2csv");
const asin_list = [
  "1098329864",
  "1927538742",
  "B087WCFSC7",
  "B086HF2T7F",
  // "B08HR6X347",
  // "B07WZ8ZSRN",
  // "B07X9V8TBG",
  // "B07V8M4B4L",
  // "0984595422",
  // "B07NR8R4GZ",
  // "1401958753",
  // "1979799318",
  // "B07ZDK442Q",
  // "B088LFRY2G",
  // "1942790139",
  // "B08JFT4LH6",
  // "B08H2FT25K",
  // "1086050320",
  // "1097411982",
  // "1291419438",
  // "1413454402",
  // "1480216895",
  // "1510752374",
  // "1518832369",
  // "1520779003",
  // "1527207269",
  // "1541647467",
  // "1633374432",
  // "B08DHMYQNK",
  // "1510764682",
  // "B00NMRPUQW",
  // "B00JBTG3TI",
  // "B08CR7RXHX",
  // "B089WGRXXD",
  // "B08JCDV25M",
  // "B089P216NP",
  // "B08F7W9276",
  // "B08P3T15PW",
  // "B08L8JK7FL",
  // "B08F2T79JH",
  // "1510752242",
  // "B088QJTV6M",
  // "B086C33Y64",
  // "B00HSSRK1E",
  // "B08D12TGZS",
  // "B087CLDWFB",
  // "0935047948",
  // "0470053844",
  // "151076366X",
  // "1953847005",
  // "B08FMQ7Y85",
  // "B013RYIONU",
  // "B082ZPVLZ5",
  // "B06XGC6SNK",
  // "B08HZFH1J3",
  // "B08CRZ9VZB",
  // "B01K95N38G",
  // "1510752242",
  // "0615494544",
  // "B003CUDOXA",
  // "0957279973",
  // "179796691X",
  // "B07QQK78LH",
  // "1454930047",
  // "1510710809",
  // "1510713948",
  // "1523615915",
  // "1529411696",
  // "1544295782",
  // "B086PVRHDT",
  // "B086Y4DWB1",
  // "B08L9765TK"
];

const amazonScraper = require("amazon-buddy");

const results = [];

(async () => {
  try {
    await asin_list.forEach(async (asin) => {
      const info = await amazonScraper.asin({ asin: asin });
      console.log(asin);
      // console.log(info)
      info.result.forEach(review=>{
        results.push(review);
      })
      
      if (results.length === asin_list.length) {
        console.log(results.length);

        let data = JSON.stringify(results);
        fs.writeFileSync('reviews.json', data);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
