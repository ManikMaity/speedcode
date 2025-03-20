import express from 'express';
import { PORT } from './config/server.config';
import apiRouter from './routes/api/api.route';
import { connectDB } from './config/db.config';

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

(async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`);
    })
})();