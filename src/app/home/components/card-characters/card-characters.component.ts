import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/models/characters.model';
@Component({
  selector: 'app-card-characters',
  templateUrl: './card-characters.component.html',
  styleUrls: ['./card-characters.component.scss'],
})
export class CardCharactersComponent implements OnInit {
  @Input() character: Character;
  constructor() {}

  ngOnInit(): void {}
}
