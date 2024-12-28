import express from "express";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const APIKey = process.env.API_KEY;
const config = {
    headers: {
        'X-CMC_PRO_API_KEY': APIKey
    }
};

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const api_url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;
        const response = await axios.get(api_url, config);

        const cryptoData = response.data.data;


        const rankedData = cryptoData.map((crypto, index) => ({
            rank: index + 1, 
            name: crypto.name,
            symbol: crypto.symbol,
            price: crypto.quote.USD.price,
            change: crypto.quote.USD.percent_change_24h,
        }));

        res.render("index.ejs", { cryptoData: rankedData });
    } catch (error) {
        const errorMessage = error.response?.data || { message: "An unknown error occurred." };
        res.render("index.ejs", { cryptoData: [], error: errorMessage });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});