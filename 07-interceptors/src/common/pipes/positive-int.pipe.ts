import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (value < 0) {
      throw new HttpException(
        `${metadata.data} is less than zero`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return value;
  }
}
