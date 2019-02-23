import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowWorldComponent } from './hellow-world/hellow-world.component';
import { RantHeaderComponent } from './rant-header/rant-header.component';
import { RantFooterComponent } from './rant-footer/rant-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HellowWorldComponent,
    RantHeaderComponent,
    RantFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
