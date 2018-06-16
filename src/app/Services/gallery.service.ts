import { Injectable } from '@angular/core';
import { GalleryModel } from '../models/gallery.model';
@Injectable()
export class GalleryService {
    public getGallery(): GalleryModel[] {
        const listgallery: GalleryModel[] = [];
        listgallery.push(
            { title: 'inject pic 1', explain: 'pic 1', isactive: true },
            { title: 'inject pic 2', explain: 'pic 2', isactive: true },
            { title: 'inject pic 3', explain: 'pic 3', isactive: true },
            { title: 'inject pic 4', explain: 'pic 4', isactive: true }
        );
        return listgallery;
    }
}
