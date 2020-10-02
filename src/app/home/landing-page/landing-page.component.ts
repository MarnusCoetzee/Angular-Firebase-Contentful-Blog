import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
declare var anime: any;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  blogs: Entry<any>[] = [];

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    this.contentfulService.getLatestBlogs()
    .then(blogs => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // wrap every word in a span
    var textWrapper = document.querySelector('.an-2');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: '.an-2 .letter',
      opacity: [0, 1],
      duration: 3000,
      delay: (el, i) => 250 * (i + 1),
    });
  }

  onClickNavigateArticle(id: string) {
    this.router.navigate(['blog/post', id]);
  }
}
