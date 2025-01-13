# Cryptocurrency Rankings Web App

This project is a simple web application that displays the latest cryptocurrency rankings using the **CoinMarketCap API**. The app fetches live data, such as rank, name, symbol, price, and 24-hour percentage change, and displays it in a tabular format on the frontend.

## Features
- Fetches live cryptocurrency data using the **CoinMarketCap API**.
- Displays the data in an interactive and visually appealing table.
- Handles errors gracefully with fallback messaging.
- Built with **Node.js**, **Express**, and **EJS** as the templating engine.

---

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
```
git clone https://github.com/your-repo/crypto-rankings.git

```
3. Navigate to the project directory:
```
cd crypto-rankings

```

4. Install dependencies:
 ```
npm install

```

5. Create a `.env` file in the root directory and add your **CoinMarketCap API key**:
```
API_KEY=your_api_key_here

```
   Replace `your_api_key_here` with your actual API key from [CoinMarketCap](https://pro.coinmarketcap.com/).

6. Start the server:
```
nodemon index.js (Or node index.js)

```

7. Open your browser and go to:
```
http://localhost:3000

```

---



## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript Templates), HTML, CSS
- **API**: [CoinMarketCap API](https://pro.coinmarketcap.com/)

---

## How It Works

1. The `index.js` file sets up an Express server and fetches cryptocurrency data from the CoinMarketCap API.
2. The fetched data is processed to include rank, name, symbol, price, and 24-hour percentage change.
3. The processed data is passed to the `index.ejs` file, which dynamically renders the table.
4. Static files (e.g., CSS) are served from the `public/` directory.



## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## Acknowledgments
- [CoinMarketCap API](https://pro.coinmarketcap.com/) for providing real-time cryptocurrency data.
- [Express](https://expressjs.com/) for the web framework.
- [EJS](https://ejs.co/) for the templating engine.
#
