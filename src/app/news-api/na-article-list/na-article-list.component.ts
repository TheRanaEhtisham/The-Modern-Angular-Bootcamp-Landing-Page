import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Article, NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-na-article-list',
  templateUrl: './na-article-list.component.html',
  styleUrls: ['./na-article-list.component.css'],
})
export class NaArticleListComponent implements OnInit {
  numberOfPages$: Subject<number>;
  articles: Article[];

  constructor(private newsApiService: NewsApiService) {
    this.newsApiService.pagesOutput.subscribe((articles) => {
      this.articles = articles;
    });
    this.numberOfPages$ = this.newsApiService.numberOfPages;
    this.newsApiService.getPage(1);
  }

  ngOnInit(): void {}

  onPageChange(page: number) {
    this.newsApiService.getPage(page + 1);
  }
}
