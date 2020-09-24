import { Component, OnInit } from '@angular/core';
import { Character } from '../../../core/models/characters.model';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  character: Character[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.apiService.getCharacters().subscribe((character) => {
      this.character = character;
      console.log(character);
    });
  }
}
