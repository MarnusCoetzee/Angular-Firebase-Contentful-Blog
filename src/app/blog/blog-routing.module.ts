import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: BlogHomeComponent },
  { path: 'post/:id', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
