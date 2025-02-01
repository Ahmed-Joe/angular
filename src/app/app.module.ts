import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InfoComponent } from './Components/info/info.component';
import { TableComponent } from './Components/table/table.component';
import { InfoChildComponent } from './Components/info/info-child/info-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    InfoComponent,
    TableComponent,
    InfoChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
