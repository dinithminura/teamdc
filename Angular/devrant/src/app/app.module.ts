import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RantHeaderComponent } from './rant-header/rant-header.component';
import { RantFooterComponent } from './rant-footer/rant-footer.component';
import { RantListItemComponent } from './modules/home/rant-list-item/rant-list-item.component';
import { RantDetailsPageComponent } from './modules/home/rant-details-page/rant-details-page.component';
import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { ArticalPageComponent } from './modules/home/artical-page/artical-page.component';
import { PostCommentComponent } from './modules/home/post-comment/post-comment.component';
import { AlertPopupComponent } from './modules/home/alert-popup/alert-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    RantHeaderComponent,
    RantFooterComponent,
    RantListItemComponent,
    RantDetailsPageComponent,
    LoginPageComponent,
    ArticalPageComponent,
    PostCommentComponent,
    AlertPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
