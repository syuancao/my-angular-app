import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CongratulationsMessageComponent } from './congratulations-message/congratulations-message.component';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PeopleListComponent,
    MultipleChoiceComponent,
    EventHandlingComponent,
    CounterButtonComponent,
    CongratulationsMessageComponent,
    CounterButtonPageComponent,
    ParamsExampleComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
