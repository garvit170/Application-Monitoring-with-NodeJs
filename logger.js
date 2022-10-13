const winston=require('winston');
const fs = require( 'fs' );

// Configuring the winston logger to generate a log file
const logDir = '/logs';
const logger = winston.createLogger({
  transports:[
      new winston.transports.Console({
        format:winston.format.combine(
            winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            winston.format.align(),
            winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )}),
    ]
});
if ( fs.existsSync( logDir ) ) {
  logger.add(
    new winston.transports.File({
      filename: '/logs/server.log',
      format:winston.format.combine(
          winston.format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
          winston.format.align(),
          winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
      )}),
  ) 
}

module.exports = logger;
