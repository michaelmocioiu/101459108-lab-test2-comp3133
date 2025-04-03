import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';
@Component({
  selector: 'app-characterlist',
  imports: [],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.scss'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HarryPotterService) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
