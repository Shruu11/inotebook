/*const connectToMongo = require("./db");
const express = require("express");

const app = express();
const port = 5000;

// ✅ Use middleware before routes
app.use(express.json()); // For parsing JSON body

// ✅ Available Routes
app.use("/api/auth", require("./routes/auth")); // ✅ Make sure this file returns a router!

//app.use("/api/auth", require("./routes/auth"));
//app.use("/api/notes", require("./routes/notes"));

connectToMongo().then(() => {
  app.listen(port, () => {
    console.log(`🚀 App listening at http://localhost:${port}`);
  });
});*/
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
