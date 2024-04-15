import { Injectable, NotFoundException } from '@nestjs/common';

import { ITag } from './tags.interface';
import { CreateTagDto, UpdateTagDto } from './tags.dto';

@Injectable()
export class TagsService {
  private tags: ITag[] = [];

  createTag({ name }: CreateTagDto) {
    const findTag = this.tags.find((tag) => tag.name === name);

    if (findTag) return findTag;

    const id = this.tags.length > 0 ? this.tags[this.tags.length - 1].id + 1 : 1;
    const createdTag: ITag = { id, name: name.trim() };

    this.tags = [...this.tags, createdTag];

    return createdTag;
  }

  findTags() {
    return { tags: this.tags };
  }

  findTag(id: number) {
    const findTag = this.tags.find((tag) => tag.id === id);

    if (!findTag) {
      throw new NotFoundException();
    }

    return findTag;
  }

  updateTag(id: number, updateTagDto: UpdateTagDto) {
    const findTag = this.findTag(id);

    this.tags = this.tags.map((tag) => {
      return tag.id === findTag.id ? { ...tag, ...updateTagDto } : tag;
    });
  }

  deleteTag(id: number) {
    const findTag = this.findTag(id);

    this.tags = this.tags.filter((tag) => tag.id !== findTag.id);
  }
}
