import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

import seedRoute from "./routes/seedRoute.js"; // for adding dummy books


import reviewRoutes from './routes/reviewRoutes.js';
import userRoutes from './routes/userRoutes.js';


import cors from 'cors';




dotenv.config();
connectDB();

const app = express();
app.use(express.json());


const allowedOrigins = [
  'http://localhost:3000',
  'https://book-verse-frontend-alpha.vercel.app/' // <-- replace with your actual frontend Vercel URL
];

app.use(cors({
  origin: allowedOrigins
}));


// Base url output
app.get('/', (req, res) => {
  res.send('Server is running successfully');
});



app.use('/api/books', bookRoutes); // Register route
app.use("/api/seed", seedRoute); // for adding dummy books
app.use('/api/reviews', reviewRoutes); // for fetching reviews by book id
app.use('/api/users', userRoutes); // fetching user information
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
