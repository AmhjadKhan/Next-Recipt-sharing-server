import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app: Application = express();

// parsers
app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:3000'
    ],
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, 'public')));

const getAController = (req: Request, res: Response) => {
  res.send('Next Recipt server running');
};

export default app;