import { Controller, Get ,  Query } from '@nestjs/common';
import { userService } from '../service/user.service';
import { CheckUser } from '../dto/user.request';

@Controller('login')
export class userController {
  constructor(private readonly userService: userService) {}
  
  @Get('')
  userLogin(@Query() body: CheckUser ): object {
    console.log(body)
    return this.userService.Login(body)
  }
}
