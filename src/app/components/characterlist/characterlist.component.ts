import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'characterlist',
  imports: [CommonModule, MatCardModule],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HarryPotterService, private router: Router) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe(data => {
      this.characters = data;
    });

    
  }
  navigateToCharacterDetails(characterId: string) {
    this.router.navigate(['/character', characterId]);
  }
}
