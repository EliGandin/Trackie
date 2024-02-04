import express from "express";
import bodyParser from "body-parser";

import homeRoutes from "./routes/home.routes";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import securitySetup from "./startup/security";

const app = express();

app.use(bodyParser.json()); // application/json
// app.use(cors());
securitySetup(app);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
app.use("/", homeRoutes);
// app.use("/signup", userRoutes);

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
