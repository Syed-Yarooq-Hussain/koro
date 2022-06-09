import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:string = '';
  page:number = 1;
  total_Page:number = 1
  is_prev: boolean = false;
  is_next: boolean = false;
  photo_list = [{
    alt_description : 'Test', 
    urls : {
      small: 'https://koro-api.imgix.net/media/66/f7/5b/1652965183/koro-logoPXS2yC9zKwHVo.svg?w=3000&auto=format,compress&fit=max'
    },
  }];

  constructor(
    private api: ApiServiceService,
  ) { }

  ngOnInit(): void {
    
  }

  searchPhoto() {
    this.api.getImages(this.search,this.page)
    .subscribe((data : any) => {
      this.photo_list = data.results;
      this.total_Page = data.total_pages
      if(this.page < this.total_Page) this.is_next = true
    });
  }

  changePage(type:string) {
    this.page = (type=='next') ? this.page+1 : this.page-1;
    this.searchPhoto();
    if(this.page != 1) this.is_prev = true
    if(this.page < this.total_Page) this.is_next = true
  }
}
