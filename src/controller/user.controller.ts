import { Controller, Get ,  Query } from '@nestjs/common';
import { userService } from '../service/user.service';

@Controller('login')
export class userController {
  constructor(private readonly userService: userService) {}
  
  @Get('')
  Login(@Query('username') username: string, @Query('password') password: string ):string {
    return this.userService.getHello(username , password)
  }
}
