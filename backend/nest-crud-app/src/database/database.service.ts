import { Injectable,OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// This service is responsible for managing the database connection using Prisma.
// It extends PrismaClient to leverage its functionality.
// The @Injectable() decorator allows this service to be injected into other parts of the application.
// The OnModuleInit interface is implemented to perform actions after the module is initialized.

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {

    // This lifecycle hook runs after the service is instantiated by NestJS
    // Here, we connect to the database using PrismaClient's $connect method
    async onModuleInit() {
        await this.$connect()
    }
}
