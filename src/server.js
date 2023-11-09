const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/api/scrape", async (req, res) => {
  try {
    const keyword = req.query.keyword;
    if (!keyword) {
      return res.status(400).json({ error: "Missing keyword parameter" });
    }

    const amazonURL = `https://www.amazon.com/s?k=${keyword}`;
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      Referer: "https://www.amazon.com/",
    };

    const { data } = await axios.get(amazonURL, { headers });

    const $ = cheerio.load(data);
    const products = [];

    $("div.s-result-item").each((index, element) => {
      const title = $(element).find("span.a-text-normal").text();
      const rating = $(element).find("span.a-icon-alt").text();
      const reviews = $(element).find("span.a-size-base").text();
      const imageUrl = $(element).find("img.s-image").attr("src");

      products.push({ title, rating, reviews, imageUrl });
    });

    if (products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }

    res.json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
