import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import {sendEmail} from './routes/sendEmail.js';

var app = express();
app.use(json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/sendEmail/:email', sendEmail);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

