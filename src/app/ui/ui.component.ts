import { Component, OnInit } from '@angular/core';
import { GalleryModel } from '../models/gallery.model';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  public gallerylist: GalleryModel[];
  constructor() { }


  ngOnInit() {
    this.gallerylist = [];
    this.gallerylist.push(
      { title: 'pic 1', isactive: true, explain: ' this image of you,picture 1' },
      { title: 'pic 2', isactive: false, explain: ' this image of you,picture 2' },
      { title: 'pic 3', isactive: true, explain: ' this image of you,picture 3' });
  }

}
