import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import homeRoutes from "./routes/home.routes";
import securitySetup from "./middlewares/security";
import headerSetup from "./middlewares/headers";

const app = express();

app.use(bodyParser.json()); // application/json
dotenv.config();

// Middlewares
securitySetup(app);
headerSetup(app);

//Routes
app.use("/", homeRoutes);

// const APP_PORT = 8000;

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
