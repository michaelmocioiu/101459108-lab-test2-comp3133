import { Component } from '@angular/core';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterfilter',
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss']
})
export class CharacterFilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];
  selectedHouse: string = '';

  constructor(private hpService: HarryPotterService) {}

  fetchHouseCharacters(): void {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe(data => {
        this.characters = data;
      });
    }
  }
}
