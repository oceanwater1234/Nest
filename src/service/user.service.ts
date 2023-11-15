import { Injectable } from '@nestjs/common';
import { CheckUser } from '../dto/user.request'

@Injectable()
export class userService {
  Login(query : CheckUser) : undefined {
    const message = "username and password add 123!"

    query.username += "123", query.password += "123"
  }
}