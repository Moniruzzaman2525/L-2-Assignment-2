import express, { Application } from "express";
import cors from "cors";
import { productRoute } from "./app/modules/products/product.route";
import errorHandler from "./errorHandler";

const app: Application = express();
app.use(cors());
app.use(express.json());


app.use('/api', productRoute)
app.use(errorHandler)

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
