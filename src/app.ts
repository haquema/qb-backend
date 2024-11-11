import 'dotenv/config';
import express from 'express';
import { clerkMiddleware } from '@clerk/express';

import prisma from '../utils/prisma';

const app = express()

// Middleware
app.use(clerkMiddleware()) // Clerk authentication
app.use(express.json()) // Parse JSON correctly

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(3500, () => console.log('REST API server ready'))