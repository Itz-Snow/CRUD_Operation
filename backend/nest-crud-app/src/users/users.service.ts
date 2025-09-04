import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import {Prisma} from '@prisma/client'
import { DatabaseService } from 'src/database/database.service';

//@injectable allows class to be injected as a dependency
@Injectable()
export class UsersService {

  // The constructor injects the DatabaseService, which is used to interact with the database.
  constructor(private readonly databaseService: DatabaseService) {}

  // async methods are used to handle databse query
  // The create method accepts a DTO for creating a user.
 async create(createUserDto: Prisma.UserInfoTBCreateInput) {
  try {
    return await this.databaseService.userInfoTB.create({
      data: createUserDto,
    });
  } catch (error) {
    if (error.code === 'P2002') {
      throw new ConflictException('A user with that email already exists');
    }
    throw error;
  }
}
  // The findAll method retrieves all users from the database.
  // It includes related data such as contact, address, and academics.
  async findAll() {
    const user = await this.databaseService.userInfoTB.findMany({
      include: { 
        contact: true, 
        address: true, 
        academics: true 
      } 
    })
    if (!user || user.length === 0) {
      throw new NotFoundException(`No users found`)
    }
    return user
  }

  // The findOne method retrieves a user by their ID.
  // It includes related data such as contact, address, and academics.
  async findOne(id: number) {
    const user =  await this.databaseService.userInfoTB.findUnique({
      where: { id, },
      include: { 
        contact: true, 
        address: true, 
        academics: true 
      } 
    })
    if (!user) {
      throw new NotFoundException(`User not found`)
    }
    return user
  }

  // The update method updates a user's information based on their ID.
  async update(id: number, updateUserDto: Prisma.UserInfoTBUpdateInput) {
  try {
    return await this.databaseService.userInfoTB.update({
      where: { id },
      data: updateUserDto,
    });
  } catch (error) {
    if (error.code === 'P2025') { // Record to update not found
      throw new NotFoundException(`User with ID ${id} not found`)
    }
    throw error;
  }
}

  // The remove method deletes a user based on their ID.
  async remove(id: number) {
  try {
    return await this.databaseService.userInfoTB.delete({
      where: { id },
    });
  } catch (error) {
    if (error.code === 'P2025') {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    throw error;
  }
}

}
