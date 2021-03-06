/**
 * Custom Winston logger.
 *
 * Allows writing to multiple transports (outputs).
 *
 * Write level `error` and below to `error.log`
 * Write level `info` and below to `combined.log`
 * @author Rajeshwari Rudravaram <s538361@nwmissouri.edu>
 *
 */

const winston = require('winston');

/**
 * A custom Winston logger that can write to
 * files and the console concurrently (and colorfully)
 */
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    // new winston.transports.File({
    //   filename: 'combined.log',
    //   level: 'info',
    // }),
    new winston.transports.File({
      filename: 'errors.log',
      level: 'error',
    }),
  ],
});

module.exports = logger;