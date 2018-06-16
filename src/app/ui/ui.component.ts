import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GalleryModel } from '../models/gallery.model';
import { GalleryService } from '../Services/gallery.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit, OnChanges {

  public gallerylist: GalleryModel[];
  public styleuse: any;
  @Input() accesslvl: string;
  public getgallery: GalleryModel[] = [];
  constructor(private galleryservice: GalleryService) { }


  ngOnInit() {

    this.getgallery = this.galleryservice.getGallery();
    this.styleuse = {
      'backgroundColor': 'lightgray'
    };
    this.gallerylist = [];
    this.gallerylist.push(
      { title: 'pic 1', isactive: true, explain: ' this image of you,picture 1' },
      { title: 'pic 2', isactive: false, explain: ' this image of you,picture 2' },
      { title: 'pic 3', isactive: true, explain: ' this image of you,picture 3' });

  }

  ngOnChanges() {
    if (this.accesslvl === 'limit') {
      this.styleuse = {
        'backgroundColor': 'pink'
      };
    } else if (this.accesslvl === 'full') {
      this.styleuse = {
        'backgroundColor': 'gray'
      };
    } else { this.styleuse = { 'backgroundColor': 'transparent' }; }


  }

}
