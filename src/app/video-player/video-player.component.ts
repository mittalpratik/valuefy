import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface Valuefy {
  "name": string;
  "poster": string;
  "trailer": string;
  "year": string;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  videoSource = "";

  @Input() videoSrc : Valuefy[] = [];
  @Input() selectedVideo : string;

  ngOnInit() {
    this.videoSource = this.videoSrc[0].trailer;
  }

  ngOnChanges(){
    if(this.selectedVideo){
      this.videoSource = this.selectedVideo;
      console.log("Video source changed after click inside video player component")
    }
  }

}
