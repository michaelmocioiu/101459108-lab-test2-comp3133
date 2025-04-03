import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../../services/harrypotter.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character?: Character;

  constructor(private route: ActivatedRoute, private hpService: HarryPotterService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe(data => {
        this.character = data;
      });
    }
  }
}
