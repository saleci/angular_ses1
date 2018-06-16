import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { UiComponent } from './ui/ui.component';
import { HovertableDirective } from './directive/hovertable.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UiComponent,
    HovertableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
