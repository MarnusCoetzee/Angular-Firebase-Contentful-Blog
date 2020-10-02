import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost: Entry<any>;

  isLoading: boolean;

  constructor(
    private router: Router,
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.contentfulService.getBlog(id).then((blogPost) => {
      this.blogPost = blogPost;
      this.isLoading = false;
      console.log(this.blogPost);
    });
  }

}
