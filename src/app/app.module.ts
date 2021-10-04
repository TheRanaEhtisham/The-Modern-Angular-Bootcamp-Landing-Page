import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsApiModule } from './news-api/news-api.module';
import { NotificationsModule } from './notifications/notifications.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeatherModule,
    NotificationsModule,
    NewsApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
