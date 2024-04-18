const express = require("express");
const dbConfig = require("./config/dbConfig");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors());
app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
