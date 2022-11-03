import express from "express";
import cors from "cors";

import priorityRoutes from "./routes/priority.js";

// creating an express app and setting some config
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/priorities", priorityRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found!" });
});

export default app;
