import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { HttpClientModule} from '@angular/common/http'
import { TestRequestModule } from './test-request/test-request.module';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { ShoppingModule } from './shopping/shopping.module';
import { HttpBookDirective } from './http-book.directive';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';
import { PipePokemonModule } from 'src/shared/pipe/pipe-pokemon/pipe-pokemon.module';



@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,
    HttpBookDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    FormsModule,
    TableModule,
    ShoppingModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    PipePokemonModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
