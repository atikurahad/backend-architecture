export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
export const PORT = process.env.PORT || 3000;


export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = 60 * 60 *24 * 7; // 7 days

export const EMAIL_HOST= "test@mail.com";
export const EMAIL_PORT = 587;
export const EMAIL_USER = "info@test.mail.com";
export const EMAIL_PASS = "password";


export const MAX_JSON_SIZE = "50MB"; // 50 MB
export const URL_ENCODED = true; // Enable URL-encoded data parsing
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 minutes
export const REQUEST_LIMIT_NUMBER = 3000; // Limit each IP to 3000 requests per windowMs

export const WEB_CACHE = false;


export const OTP_EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes
export const OTP_LENGTH = 6;

export const LOG_LEVEL = "info"; // Log level for Winston (e.g., 'info', 'error', 'debug')
export const LOG_FILE = "logs/application.log"; // Log file path for Winston    


export const RABBITMQ_URL = "amqp://localhost"; // RabbitMQ server URL
export const EMAIL_QUEUE_NAME = "email.send";