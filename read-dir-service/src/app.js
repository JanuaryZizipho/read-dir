import express from 'express';
import directoryListingRoutes from './routes/directoryListingRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:4200'}));
app.use('/api/v1/files', directoryListingRoutes);

app.use(errorHandler);

export default app;