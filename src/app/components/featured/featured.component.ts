import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {
  featuredList!: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url: string = './assets/json/featured.json';
    this.http.get(url).subscribe((res) => (this.featuredList = res));
  }
}
