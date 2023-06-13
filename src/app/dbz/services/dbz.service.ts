import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public charactersList: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 8500 },
  ];

  onNewCharacter(character: Character): void {
    // console.log('Main-page')
    // console.log(character);
    const newCharacter: Character = { id: uuid(), ...character };
    this.charactersList.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.charactersList.splice(index, 1);
  // }
  deleteCharacterById(id: string): void {
    const index = this.charactersList.findIndex((character) => character.id === id);

    if (index === -1) return;

    this.charactersList.splice(index, 1);
  }


  constructor() {}
}
