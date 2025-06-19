import { Injectable, ConsoleLogger} from '@nestjs/common';
import * as fs from 'fs';
import { promises as fsPromises } from 'fs'
import * as path from 'path'

@Injectable()
// Custom logger (MyLoggerService) that extends NestJS's ConsoleLogger.
// This service can be used to log messages with a specific context.
// It overrides the log method to include the context in the log message.
export class MyLoggerService extends ConsoleLogger {

    // This method logs messages to a file with a timestamp.
    // asynchronously appends/write a formatted log entry to a log file.
    async logToFile(entry: string) {
        const formattedEntry = `${Intl.DateTimeFormat('en-US', {
            dateStyle: 'short',
            timeStyle: 'short',
            timeZone: 'America/Chicago',
        }).format(new Date())}\t${entry}\n`

        try {
            // Ensure the logs directory exists, if not, create it.
            if (!fs.existsSync(path.join(__dirname, '..', '..', 'logs'))){
                await fsPromises.mkdir(path.join(__dirname, '..', '..', 'logs'))
            }
            await fsPromises.appendFile(path.join(__dirname, '..', '..', 'logs', 'myLogFile.log'), formattedEntry)
        } catch (e) {
            if (e instanceof Error) console.error(e.message)
        }
    }

    // overrides the default log() method, context tags the log source
    log(message: any, context?: string) {

        // The entry is formatted as "context\tmessage" for better readability in logs.
        const entry = `${context}\t${message}`; 
        this.logToFile(entry)

        // Call the parent class's log method with the formatted message
        super.log(message, context);
    }
    // Overrides the default error() method to log errors with a specific context.
    error(message: any, stackOrContext?: string) {
        const entry = `${stackOrContext}\t${message}`
        this.logToFile(entry)
        super.error(message, stackOrContext)
    }
}
