import express, { Request, Response } from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
