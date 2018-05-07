import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MarketplaceComponent,
    AlbumDetailComponent,
    AboutComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
  //   FormsModule,
  //  HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
