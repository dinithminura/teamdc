import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RantDetailsPageComponent } from './modules/home/rant-details-page/rant-details-page.component';
import { FeedListComponent } from './modules/home/feed-list/feed-list.component';

const routes: Routes = [
  {path: 'rant/:id', component: RantDetailsPageComponent},
  {path: '', component: FeedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [RantDetailsPageComponent, FeedListComponent]
