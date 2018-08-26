import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './layout/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LauncherModule } from './launcher/launcher.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    ChatModule,
    LauncherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
