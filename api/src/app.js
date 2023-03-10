//core

//third-party
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');

//module
const AppError = require('./utils/appError');
const globalErrorHandler = require('./middlewares/errorMiddleware');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

dotenv.config();

const app = express();

// GLOBAL middlewares

// Implement CORS
//TODO app.use(cors());
// Access-Control-Allow-Origin *
// api.domain_name.com, front-end domain_name.com
app.use(
  cors({
    // origin: 'https://www.natours.com',
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://pos-phyo-yarzar.vercel.app',
      'https://pos-nu.vercel.app',
    ],
  }),
);

app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 500, // 100 requests
  windowMs: 60 * 60 * 1000, // 1hr
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

app.use(cookieParser());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'price',
      // 'something',
    ],
  }),
);

// Serving static files
app.use(express.static(`${__dirname}/public`));

app.use(compression());

// ROUTES
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
