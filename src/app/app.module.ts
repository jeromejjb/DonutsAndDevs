import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutlistComponent } from './donutlist/donutlist.component';
import { DonutinfoComponent } from './donutinfo/donutinfo.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutComponent } from './donuts/donut.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutlistComponent,
    DonutinfoComponent,
    DonutDetailComponent,
    DonutComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
