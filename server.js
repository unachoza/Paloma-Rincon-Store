const PORT = 8001
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')

const app = express()

app.get('/', (req, res) => {
  res.json('Hello welcome images and titles I scraped from Paloma Rincon Store ')
})

app.listen(PORT, () =>  console.log(`listening on ${PORT}`))