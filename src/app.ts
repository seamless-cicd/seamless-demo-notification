import express from 'express';
import cors from 'cors';
import axios from 'axios';

const NOTIFICATION_ENDPOINT = 'https://eon8yn3r9rzmfky.m.pipedream.net';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Hello');
});

app.get('/seamless', (_req, res) => {
  res.status(200).send('Seamless');
});

// Forward notification message to endoint
app.post('/notifications', async (req, res) => {
  try {
    const message = req.body.message;
    await axios.post(NOTIFICATION_ENDPOINT, { message: message + '!!!!' });

    res.status(200).json({ message: 'Notification was sent to the customer' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    res.status(500).send('Error with notification endpoint');
  }
});

export default app;
