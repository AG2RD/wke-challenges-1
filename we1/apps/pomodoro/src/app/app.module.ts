import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './features/container/container.component';
import { CountdownComponent } from './features/countdown/countdown.component';
import { StepComponent } from './features/step/step.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { TimePipe } from './features/countdown/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CountdownComponent,
    StepComponent,
    TimePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
