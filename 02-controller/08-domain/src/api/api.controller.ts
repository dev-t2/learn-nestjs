import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'api.:version.localhost' })
export class ApiController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `Hello, API ${version}`;
  }
}
