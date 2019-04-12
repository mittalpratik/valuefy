import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Valuefy {
  "name": string;
  "poster": string;
  "trailer": string;
  "year": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valuefy';
  responseCollected = false;
  apiResponse : any = [];
  selectedVideo = '';
  name = '';
  constructor(private _http: HttpClient) {
    this._http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos').subscribe((res) => {
      console.log('Http Call is success from compoennt');
      console.log("This is the apiResponse coming from the API", res)
      this.apiResponse = res;
      this.responseCollected = true;
      this.name=this.apiResponse[0].name;
    }, (error) => {
      console.log('Http Call is failed from component');
    })
  }

  videoChosen(videoObject){
    this.selectedVideo = videoObject.trailer;
    this.name=videoObject.name;
    console.log("Video source changed after click, inside video app component")
  }

}
