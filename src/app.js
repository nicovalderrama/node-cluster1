const express = require("express");
const app = express();
const { initializeDB } = require("./config/db.config");
const { libraryRouter, bookRouter } = require("./routes");
const morgan = require("morgan");
// mdw
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", libraryRouter);
app.use("/api", bookRouter);
// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`server running at port ${PORT}`);
});
