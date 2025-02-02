// logger.mjs
import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper constants to handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define log directory
const logDir = path.join(__dirname, 'logs');

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
      filename: path.join(logDir, `${new Date().toISOString().replace(/:/g, '-')}.log`),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
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
