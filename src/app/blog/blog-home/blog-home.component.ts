import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  isLoading: boolean;

  blogs: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.contentfulService.getBlogs()
    .then(blogs => {
      this.blogs = blogs;
      this.isLoading = false;
      console.log(this.blogs);
    });
  }

  onClickNavigateArticle(id: string) {
    this.router.navigate(['blog/post', id]);
  }

}
