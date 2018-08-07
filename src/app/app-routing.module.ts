import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchBarComponent } from './launcher/launch-bar/launch-bar.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', component: LaunchBarComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
