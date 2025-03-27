import express, { Express, Request, Response, RequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import prisma from './lib/prisma';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Pitt2PIT API' });
});

// User routes
app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.post('/users', async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    console.log('Creating user with data:', { email, name });
    
    const user = await prisma.user.create({
      data: { email, name },
    });
    
    console.log('User created successfully:', user);
    res.json(user);
  } catch (error: any) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
});

// Time request routes
app.post('/time-requests', (async (req: Request, res: Response) => {
  try {
    const { userId, date, startTime, endTime } = req.body;
    
    // Validate the input
    if (!userId || !date || !startTime || !endTime) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create the time request
    const timeRequest = await prisma.timeRequest.create({
      data: {
        userId,
        date: new Date(date),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      },
    });

    res.json(timeRequest);
  } catch (error: any) {
    console.error('Error creating time request:', error);
    res.status(500).json({ error: 'Failed to create time request', details: error.message });
  }
}) as RequestHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
