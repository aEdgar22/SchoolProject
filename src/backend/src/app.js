import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
const app = express();
import config from "./database/config.js";
import routerApi from "./routes/api.routes.js";

//enviando puerto servidor 
app.set('port',config.port);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

routerApi(app);

export default app;
