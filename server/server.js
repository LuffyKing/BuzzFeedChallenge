import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import badApiRequest from './router/badRequests/badApiRequest';
import configJs from './config/config';
import router from './router';

const env = process.env.NODE_ENV || 'development';

const config = configJs[env];

const app = express();

const port = process.env.PORT || config.PORT;

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use('/api/v1', router);

app.use('/', badApiRequest);

app.listen(port);

export default app;
