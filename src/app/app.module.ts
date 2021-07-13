import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmojiComponent } from './emoji/emoji.component';
import { EmojiSearchpipe } from './shared/emoji-search.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { DeletedComponent } from './deleted/deleted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmojiComponent,
    EmojiSearchpipe,
    FavouriteComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
