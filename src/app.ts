import express from 'express';
import connectDB from './config/db';
import cors from 'cors';

const app = express();

app.use(express.json());
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())

connectDB();

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { email, credit } = req.body;
  try {
    // const submission = new Submission({ email, credit });
    // await submission.save();
    res.redirect(`/summary?email=${email}&credit=${credit}`);
  } catch (err) {
    res.status(500).send('Error saving data');
  }
});

export default app;