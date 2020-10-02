import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getLatestBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      limit: 4
    }, query))
    .then(res => res.items);
  }

  getBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      order: '-sys.createdAt'
    }, query))
    .then(res => res.items);
  }

  getBlog(courseId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'blogPost'
    }, {'sys.id': courseId}))
      .then(res => res.items[0]);
  }
}
