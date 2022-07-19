import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { heroesModule } from './heroes/heroes.module';
import { ListadoComponent } from './heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
 
  
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
