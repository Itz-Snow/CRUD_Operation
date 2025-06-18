import { Injectable } from '@nestjs/common';
import {Prisma} from '@prisma/client'
import { DatabaseService } from 'src/database/database.service';

//@injectable allows class to be injected as a dependency
@Injectable()
export class UsersService {

  // The constructor injects the DatabaseService, which is used to interact with the database.
  constructor(private readonly databaseService: DatabaseService) {}

  //async methods are used to handle asynchronous operations, such as database queries.
  // The create method accepts a DTO for creating a user.
  async create(createUserDto: Prisma.UserInfoTBCreateInput) {

    // This method uses the database service to create a new user in the userInfoTB table.
    return this.databaseService.userInfoTB.create({
      // The data property contains the user information to be created.
      data: createUserDto,
    });
  }

  // The findAll method retrieves all users from the database.
  // It includes related data such as contact, address, and academics.
  async findAll() {
    return this.databaseService.userInfoTB.findMany({
      // include: { 
      //   contact: true, 
      //   address: true, 
      //   academics: true 
      // } 
    })
  }

  // The findOne method retrieves a user by their ID.
  // It includes related data such as contact, address, and academics.
  async findOne(id: number) {
    return this.databaseService.userInfoTB.findUnique({
      where: { id, },
      // include: { 
      //   contact: true, 
      //   address: true, 
      //   academics: true 
      // } 
    })
  }

  // The update method updates a user's information based on their ID.
  async update(id: number, updateUserDto: Prisma.UserInfoTBUpdateInput) {
    return this.databaseService.userInfoTB.update({
      where: { id, },
      data: updateUserDto,
    })
  }

  // The remove method deletes a user based on their ID.
  async remove(id: number) {
    return this.databaseService.userInfoTB.delete({
       where: { id } 
      });
  }
}
