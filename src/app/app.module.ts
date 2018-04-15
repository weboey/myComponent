import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentModule } from "./component/component.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { TemplateComponent } from './form/template/template.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NzDemoFormLoginComponent } from './form/nz-demo-form-login/nz-demo-form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NzDemoFormLoginComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    ComponentModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
