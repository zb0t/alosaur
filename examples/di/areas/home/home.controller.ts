import {
  Controller,
  Content,
  QueryParam
} from '../../../../src/mod.ts';
import { Get } from '../../../../src/decorator/Get.ts';
import { FooService } from '../../services/foo.service.ts';

@Controller('/home')
export class HomeController {
  name: string;
  constructor(private service: FooService) {
  }
  @Get('/text')
  text(@QueryParam('name') name: string,) {
    return Content(`Hey! ${this.service.getName()}, ${name}`);
  }
}
