const express = require("express");
const productRouter = require("./route");
const cors = require("cors");
const app = express();

port = 5500;

app.use(express.json());
app.use(cors()); // allow cross origin

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/v1/products", productRouter);
// ye jitna chahiye utna likh saktey hai, differen "resource" k liye jaise "order", ka alag

app.listen(port, () => {
  console.log("listening on port", port);
});
