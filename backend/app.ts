import express from "express";
import bodyParser from "body-parser";

import homeRoutes from "./routes/home.routes";
import userRoutes from "./routes/user.routes";
import securitySetup from "./startup/security";

const app = express();

app.use(bodyParser.json()); // application/json

securitySetup(app);

//Routes
app.use("/", homeRoutes);
// app.use("/signup", userRoutes);

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log("Server is running on port 8000");
});
