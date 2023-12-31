import "./loadEnv.js";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import connectDB from "./config/db.js";

import cors from "cors";

const port = process.env.BACKEND_PORT || 3000;
const app = express();

connectDB();
app.use(cors());
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
