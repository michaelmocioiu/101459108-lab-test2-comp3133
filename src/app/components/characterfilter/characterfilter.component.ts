import { Component } from '@angular/core';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'characterfilter',
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss'],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatSelectModule, FormsModule],
})
export class CharacterFilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];
  selectedHouse: string = '';

  constructor(private hpService: HarryPotterService, private router: Router) {}

  fetchHouseCharacters(): void {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe(data => {
        this.characters = data;
      });
    }
  }
  navigateToCharacterDetails(characterId: string) {
    this.router.navigate(['/character', characterId]);
  }
}
