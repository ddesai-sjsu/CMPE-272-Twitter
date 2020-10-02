import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';

const routes: Routes = [
  {path: 'add-tweet', component:AddTweetComponent},
  {path: '', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
