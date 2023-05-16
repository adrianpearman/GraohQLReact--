// NPM Modules
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");
// Local Variables
const app = express();
const PORT = process.env.PORT || 4000;
const schema = require("./schema");
// Middlewares
app.use(cors());
app.use(express.static("public"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
// Serving the client files
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});
