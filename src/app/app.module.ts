import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'app/app.routes';
import { COMPONENTS, SignupComponent } from 'app/components';
import { LoginComponent } from 'app/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostModel } from './post.model';
import { PostService } from './services';
import { UploadComponent } from './components/upload/upload.component';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ImageUploadModule.forRoot(),
  ],
  providers: [PostModel, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
