import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [BlogHomeComponent, BlogPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ]
})
export class BlogModule { }
