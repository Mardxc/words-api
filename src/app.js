import express from "express";
import morgan from "morgan";
import cors from "cors";
import wordsRoutes from "./routes/words.route";

const app = express();

app.set("port", 8080);
app.set("json spaces", 2);

app.use(morgan("dev"));
//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/words", wordsRoutes);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

export default app;
