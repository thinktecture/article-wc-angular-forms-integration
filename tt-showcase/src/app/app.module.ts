import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@tt/input';
import {ReactiveFormsModule} from "@angular/forms";
import { TtInputDirective } from './directives/tt-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    TtInputDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
