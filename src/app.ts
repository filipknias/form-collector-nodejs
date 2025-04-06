import express from 'express';
import connectDB from './config/db';
import cors from 'cors';

const app = express();

app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB();

app.use('/', (req, res) => {
  res.render('index.ejs');
});

export default app;