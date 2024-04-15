import { Injectable } from '@nestjs/common';

import { ITag } from './tags.interface';
import { CreateTagDto } from './tags.dto';

@Injectable()
export class TagsService {
  private tags: ITag[] = [];

  createTag({ name }: CreateTagDto) {
    const id = this.tags.length > 0 ? this.tags[this.tags.length - 1].id + 1 : 1;
    const createdTag: ITag = { id, name: name.trim() };

    this.tags = [...this.tags, createdTag];

    return createdTag;
  }

  findTags() {
    return this.tags;
  }
}
