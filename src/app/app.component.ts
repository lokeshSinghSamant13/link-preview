import { Component, OnInit } from '@angular/core';
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'link-preview';

  ngOnInit() {
    this.getImgagePreview();
  }

  async getImgagePreview() {
    // pass the link directly
    getLinkPreview('https://www.youtube.com/watch?v=dg95rKkhJDA&ab_channel=TATATAN').then((data) =>
      console.log(data)
    );
  }
}
