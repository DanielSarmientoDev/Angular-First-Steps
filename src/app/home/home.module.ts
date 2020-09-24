import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardCharactersComponent } from './components/card-characters/card-characters.component';
@NgModule({
  declarations: [HomeComponent, CardCharactersComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule, MatButtonModule],
})
export class HomeModule {}
