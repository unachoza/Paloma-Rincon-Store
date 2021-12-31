const PORT = 8001;
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

const palomaURL = "https://palomarincon.bigcartel.com/";
const products = [];
const getRandomPrice = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log("hello");
app.get("/products", (req, res) => {
  axios
    .get(palomaURL)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      $(".product-list-item", html).each(function (i) {
        let img = $(this).find("img").attr("src");
        $(this)
          .find("div > div > div .product-list-item-name")
          .each(function () {
            let imageTitle = $(this).text();
            products.push({
              id: i,
              title: imageTitle,
              imageURL: img,
              price: `${getRandomPrice(70, 90)} €`,
            });
          });
      });

      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.json("Hello welcome images and titles I scraped from Paloma Rincon Store ");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
