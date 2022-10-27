import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppIconService } from './app-icon.service';
import { StoreModule } from '@ngrx/store';
import { layoutFeatureKey, layoutReducer } from './store/layout.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreModule.forFeature(layoutFeatureKey, layoutReducer),
    //StoreModule.forFeature(customerFeatureKey, customerReducer),
    StoreDevtoolsModule.instrument({
      name: 'Nexul Academy - Simple CRM',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconSerice: AppIconService) {}
}
