import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma, PrismaClient } from '@prisma/client';

// This controller handles user-related requests.
@Controller('users')
export class UsersController {

  //constructor is used to inject the UsersService into this controller.
  // The UsersService contains the business logic for managing users
  constructor(private readonly usersService: UsersService) {}

  // The create method accepts a DTO for creating a user.
  // The DTO is of type Prisma.UserInfoTBCreateInput, which is defined in the Prisma schema.
  @Post()
  create(@Body() createUserDto: Prisma.UserInfoTBCreateInput) {
    return this.usersService.create(createUserDto);
  }

  // The findAll method retrieves all users.
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // The findOne method retrieves a user by their ID.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // The update method updates a user's information based on their ID.
  // It accepts a DTO of type Prisma.UserInfoTBUpdateInput
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserInfoTBUpdateInput) {
    return this.usersService.update(+id, updateUserDto);
  }

  // The remove method deletes a user based on their ID.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
