import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger';

import { ITag } from './tags.interface';

export class CreateTagDto extends PickType(ITag, ['name'] as const) {}

export class CreateTagResponse extends ITag {}

export class FindTagsResponse {
  @ApiProperty({ type: [ITag] })
  tags: ITag[];
}

export class UpdateTagDto extends PartialType(OmitType(ITag, ['id'] as const)) {}
