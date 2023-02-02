import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { SmallestCardComponent } from './components/smallest-card/smallest-card.component';
import { TeamStandingComponent } from './components/standings/team-standing/team-standing.component';
import { DriverStandingComponent } from "./components/standings/driver-standing/driver-standing.component";
import { SmallStandingsComponent } from "./components/standings/small-standings/small-standings.component";
import { FormulaoneComponent } from './pages/formulaone/formulaone.component';
import { ContentNewsComponent } from './components/content-news/content-news.component';
import { BigStandingsComponent } from './components/standings/big-standings/big-standings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    SmallestCardComponent,
    TeamStandingComponent,
    DriverStandingComponent,
    SmallStandingsComponent,
    FormulaoneComponent,
    ContentNewsComponent,
    BigStandingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
