import { createLogger, transports, format, addColors } from "winston";

export const logger = createLogger({
    format: format.combine(
        format.colorize(),
        format.simple(),
    ),
    'transports': [
        new transports.Console(),
    ],
})

addColors({
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
});