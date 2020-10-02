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

  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost'
    }, query))
    .then(res => res.items);
  }

  getCourse(courseId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'blogPost'
    }, {'sys.id': courseId}))
      .then(res => res.items[0]);
  }
}
