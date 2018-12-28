import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatTooltipModule,
  MatStepperModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';

// Components
import { ShortBioComponent } from './components/short-bio/short-bio.component';
import { MadeOfComponent } from './components/made-of/made-of.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';

// Services
import { CycleItemsService } from './services/cycle-items.service';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortBioComponent,
    MadeOfComponent,
    FooterComponent,
    ContactComponent,
    SocialMediaComponent,
    WorkComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatSnackBarModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CycleItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
