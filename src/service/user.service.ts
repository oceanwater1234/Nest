import { Injectable } from '@nestjs/common';

@Injectable()
export class userService {
  getHello(username , password): string {
    console.log(username, password)
    return `${username} , ${password}`;
  }
}