import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get Characters(): Character[] {
    return [...this.dbzService.charactersList];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  addCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }

}
