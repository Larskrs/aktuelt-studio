// logger.mjs
import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper constants to handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define log file path
const logFilePath = path.join(__dirname, 'logs');

// Custom log format
const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // File transport
    new transports.File({
      filename: logFilePath,
      maxsize: 5242880, // 5MB
      maxFiles: 1,
      tailable: true,
    }),
    // Console transport
    new transports.Console({
      format: format.combine(
        format.colorize(),
        logFormat
      ),
    }),
  ],
});

export default logger;
