import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  posts: any;
  filteredPosts: any;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
      this.filteredPosts = response;
      console.log(this.posts);
    });
  }

  search(keyword: string) {
    // filtra i post in base alla parola chiave
    this.filteredPosts = this.posts.filter((post: { title: string }) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
