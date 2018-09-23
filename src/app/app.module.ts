import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import {GithubComponent} from './component/github.component';

@NgModule({
  imports: [BrowserModule, HttpModule, ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
