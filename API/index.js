const express = require("express");
const { use } = require("./app/routes");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", require("./app/routes"));

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
