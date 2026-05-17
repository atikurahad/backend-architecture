
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/api.js';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';
import cluster from 'cluster';
dotenv.config();
import {
    MONGODB_URI,
    PORT,
    MAX_JSON_SIZE,
    URL_ENCODED,
    REQUEST_LIMIT_TIME,
    REQUEST_LIMIT_NUMBER,
    WEB_CACHE,
} from './app/config/config.js';


const app = express();

// Middleware

app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(morgan('dev'));
app.use(fileUpload());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(
    fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
        abortOnLimit: true,
        useTempFiles: false,
    })
)

app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));

const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
    message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);

app.set("etag", WEB_CACHE);

//database connection
mongoose.connect(MONGODB_URI, {
 autoIndex: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const __rootDir=path.dirname(fileURLToPath(import.meta.url));
app.use('/uploads', express.static(path.join(__rootDir, 'IMAGE_STORAGE_PATH')));

// Routes

app.use('/api', router);

// Start the server
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});


app.use((req, res)=>{
    res.status(404).json({ message: 'Route not found' });
})



if (cluster.isPrimary) {
   cluster.fork();
   cluster.fork();
   cluster.fork();
   cluster.fork();
} else {
   app.listen(PORT, () => {
        console.log(`Process ${process.pid} running`);
    });
}