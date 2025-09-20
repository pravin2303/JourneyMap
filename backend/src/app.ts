import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import tripRoutes from './routes/tripRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Main routes
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;