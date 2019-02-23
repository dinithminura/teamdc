import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RantListItemComponent } from './modules/home/rant-list-item/rant-list-item.component';
import { LoginPageComponent } from './modules/login/login-page/login-page.component';
import { ArticalPageComponent } from './modules/home/artical-page/artical-page.component';
import { PostCommentComponent } from './modules/home/post-comment/post-comment.component';
import { AlertPopupComponent } from './modules/home/alert-popup/alert-popup.component';
import { RantHeaderComponent } from './modules/global/rant-header/rant-header.component';
import { RantFooterComponent } from './modules/global/rant-footer/rant-footer.component';
import { LoadingSpinnerComponent } from './modules/global/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RantHeaderComponent,
    RantFooterComponent,
    RantListItemComponent,
    routingComponent,
    LoginPageComponent,
    ArticalPageComponent,
    PostCommentComponent,
    AlertPopupComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
