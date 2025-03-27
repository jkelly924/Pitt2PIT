import express, { Express, Request, Response } from 'express';
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

// Post routes
app.get('/posts', async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/posts', async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({
      data: { title, content, authorId },
      include: { author: true },
    });
    res.json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}); 