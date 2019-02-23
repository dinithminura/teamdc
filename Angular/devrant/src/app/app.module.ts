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
import { LoginPopupService } from './modules/login/login-page/login-page.service';
import { LoaderService } from './modules/global/loading-spinner/loader.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './control-messages.component';
import { AuthService } from './auth.service';
import {HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { ErrorService } from './modules/service/api.error';

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
    LoadingSpinnerComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginPopupService,
    LoaderService,
    AuthService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
