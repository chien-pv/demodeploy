import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  list: any;
  loading = true;
  url = 'https://6659803cde346625136ca9af.mockapi.io/projects';
  constructor(private httpService: HttpClient) {}
  getAllData() {
    this.loading = true;
    this.httpService.get(this.url).subscribe((data) => {
      this.loading = false;
      this.list = data;
    });
  }
  ngOnInit(): void {
    this.getAllData();
  }
}
