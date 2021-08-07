import { Controller, Get, Render } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('auth/login')
  @Render('login')
  login() {
    return { message: 'Login' };
  }

  @Get('auth/register')
  @Render('register')
  register() {
    return { message: 'Register' };
  }
}
