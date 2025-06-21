import {Catch, ArgumentsHost, HttpStatus, HttpException} from '@nestjs/common'
import {BaseExceptionFilter} from '@nestjs/core'
import {Request, Response} from 'express'
import {MyLoggerService} from './my-logger/my-logger.service'
import { PrismaClientValidationError } from '@prisma/client/runtime/library'

// Defines the structure of the response object
type MyResponseObj = {
    statusCode: number;
    timestamp: string;
    path?: string;
    response: string | object;   
}
 // @Catch decorator,a global exception filter
 // catches all exceptions thrown in the application.
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter { 
    private readonly logger = new MyLoggerService(AllExceptionsFilter.name)

    catch(exception: any, host: ArgumentsHost): void {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        // Default response object
        const MyResponseObj: MyResponseObj = {
            statusCode: 500,
            timestamp: new Date().toISOString(), 
            path: request.url,
            response: '' ,
        }; 
        // Check if the exception is an instance of HttpException
        if (exception instanceof HttpException) {   
            // If it is, set the status code and response message
            MyResponseObj.statusCode = exception.getStatus()
            const response = exception.getResponse()
            MyResponseObj.response =
                typeof response === 'string' ? response
                    : (response as any).message || 'An error occurred'
        }
        // If the exception is a PrismaClientValidationError, handle it specifically
        else if (exception instanceof PrismaClientValidationError) {
            MyResponseObj.statusCode = 422
            MyResponseObj.response = exception.message.replaceAll(/\n/g, ' ')
        }  
        // If the exception is not an HttpException, set a generic error response
        else {
            MyResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR
            MyResponseObj.response = 'Internal server error'
        }  
        // Log the error message using the custom logger service
        response
            .status(MyResponseObj.statusCode)
            .json(MyResponseObj)

        // Log the error message using the custom logger service
        this.logger.error(MyResponseObj.response,AllExceptionsFilter.name)

        // Call the parent class's catch method to handle the exception
        super.catch(exception, host)
    }
}