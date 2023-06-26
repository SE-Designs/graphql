import "./loadEnv.js";

import express from "express";

import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log("==============================");
  console.log(`Server is running on port ${port}`);
  console.log("==============================");
});
