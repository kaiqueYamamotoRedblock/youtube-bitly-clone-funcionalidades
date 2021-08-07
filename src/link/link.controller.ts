import { Controller, Get, Render } from '@nestjs/common';

@Controller('link')
export class LinkController {
  @Get('dashboard')
  @Render('dashboard')
  dashboard() {
    return { message: 'Dashboard' };
  }
}
