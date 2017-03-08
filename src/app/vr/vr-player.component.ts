import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vrplayer',
  templateUrl: './vr-player.component.html',
  styleUrls: ['./vr.component.css']
})
export class VrPlayerComponent implements OnInit {
   @Input() url: string;

   private captionPlaypause: string;

   constructor() {
       this.captionPlaypause = "PLAY";
   }

  ngOnInit() {
  }



  playpause(video: any) {
      if (video) {
          if (video.paused)
              this.play(video);
          else
              this.pause(video);
      }       
      else
          console.log("no video");
  }


  play(video: any) {          
      video.play();      
      this.captionPlaypause = "PAUSE";
  }
  pause(video: any) {          
      video.pause();      
      this.captionPlaypause = "PLAY";
  } 

  stop(video: any) {
      if (video.currentTime >= 0) {
          video.currentTime = 0;
          this.captionPlaypause = "PLAY";
          video.pause();
      }
      else
          console.log("no video");
  }

}
