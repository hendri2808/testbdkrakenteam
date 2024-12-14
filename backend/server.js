const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors');
app.use(cors());

app.get("/prices", async (req, res) => {
  try {
    // Fetch data dari Coingecko
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=tether,usd-coin&vs_currencies=usd"
    );

    // Ambil harga dari response
    const prices = {
      USDT: response.data.tether.usd,
      USDC: response.data["usd-coin"].usd,
    };

    res.json(prices);
  } catch (error) {
    console.error("Error fetching prices:", error.message);
    res.status(500).json({ error: "Failed to fetch prices" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
