import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Valuefy {
  "name":string;
  "poster":string;
  "trailer":string;
  "year":string;
}

@Component({
  selector: 'app-video-play-list',
  templateUrl: './video-play-list.component.html',
  styleUrls: ['./video-play-list.component.css']
})
export class VideoPlayListComponent implements OnInit {

  @Input() apiResponse: Valuefy[] = [];
  @Output() videoSelected = new EventEmitter();

  slides = [];
  slideConfig = {
    "centerMode": true,
    "arrow": true,
    "centerPadding": '60px',
    "nextArrow":"<div>Next</div>",
    "prevArrow":"<div>Previous</div>",
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "adaptiveHeight" : true
  };

  constructor() { }
  

  ngOnInit() { }

  ngOnChanges(){
    this.apiResponse.forEach(res => {
      var posterImage ={
        img : ''
      }
      posterImage.img=res.poster;
      this.slides.push(posterImage);
    })
  }


  slickInit(e) {
    console.log('slick initialized');
  }

  onVideoSelect(index){
    console.log("Selected video for player",this.apiResponse[index].name);
    this.videoSelected.emit(this.apiResponse[index]);
    console.log("Video source changed after click , inside video play list component")
  }


}
