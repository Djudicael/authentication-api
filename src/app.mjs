import { express, bodyParser } from '../deps.mjs';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

import  AuthenticationRouter from './routes/AuthenticationRouter.mjs';
app.use('/api/v1/authentication', AuthenticationRouter);

export default app;