import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss'],
  imports: [CommonModule]
})
export class CharacterDetailsComponent implements OnInit {
  character?: Character;

  constructor(private route: ActivatedRoute, private hpService: HarryPotterService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe(data => {
        if (Array.isArray(data) && data.length > 0) {
          this.character = data[0];
          console.log('Fetched character data:', this.character);
        } else {
          console.error('No character data found or data is not an array');
        }
      });
    }
  }
  
}
