import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { UiComponent } from './ui/ui.component';
import { HovertableDirective } from './directive/hovertable.directive';
import { TorialPipe } from './Pipe/toRial.pipe';
import { GalleryService } from './Services/gallery.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiComponent,
    HovertableDirective,
    TorialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
